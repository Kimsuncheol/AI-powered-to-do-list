'use client';
import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';

export type SubscriptionPlan = 'free' | 'pro' | 'enterprise';

interface UsageInfo {
  agentCallsThisMonth: number;
  agentCallsLimit: number;
  lastResetDate: Date;
}

interface BillingInfo {
  plan: SubscriptionPlan;
  billingKey?: string;
  cardLast4?: string;
  nextBillingDate?: Date;
  usage: UsageInfo;
}

interface BillingContextValue {
  billingInfo: BillingInfo;
  isLoading: boolean;
  subscribeToPlan: (plan: SubscriptionPlan) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  updatePaymentMethod: () => Promise<void>;
  incrementAgentUsage: () => void;
  canUseAgent: () => boolean;
}

const PLAN_LIMITS = {
  free: 10,
  pro: 100,
  enterprise: Infinity,
};

const getDefaultUsage = (plan: SubscriptionPlan): UsageInfo => ({
  agentCallsThisMonth: 0,
  agentCallsLimit: PLAN_LIMITS[plan],
  lastResetDate: new Date(),
});

const defaultBillingInfo: BillingInfo = {
  plan: 'free',
  usage: getDefaultUsage('free'),
};

const BillingContext = createContext<BillingContextValue>({
  billingInfo: defaultBillingInfo,
  isLoading: false,
  subscribeToPlan: async () => {},
  cancelSubscription: async () => {},
  updatePaymentMethod: async () => {},
  incrementAgentUsage: () => {},
  canUseAgent: () => true,
});

export const useBilling = () => useContext(BillingContext);

// TossPayments Client Key - should be in env
const TOSS_CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

export function BillingProvider({ children }: { children: ReactNode }) {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(defaultBillingInfo);
  const [isLoading, setIsLoading] = useState(false);

  // Check and reset usage monthly
  useEffect(() => {
    const checkAndResetUsage = () => {
      const now = new Date();
      const lastReset = new Date(billingInfo.usage.lastResetDate);
      
      // Reset if it's a new month
      if (now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
        setBillingInfo(prev => ({
          ...prev,
          usage: {
            ...prev.usage,
            agentCallsThisMonth: 0,
            lastResetDate: now,
          },
        }));
      }
    };

    checkAndResetUsage();
    const interval = setInterval(checkAndResetUsage, 1000 * 60 * 60); // Check hourly
    return () => clearInterval(interval);
  }, [billingInfo.usage.lastResetDate]);

  const incrementAgentUsage = useCallback(() => {
    setBillingInfo(prev => ({
      ...prev,
      usage: {
        ...prev.usage,
        agentCallsThisMonth: prev.usage.agentCallsThisMonth + 1,
      },
    }));
  }, []);

  const canUseAgent = useCallback(() => {
    return billingInfo.usage.agentCallsThisMonth < billingInfo.usage.agentCallsLimit;
  }, [billingInfo.usage.agentCallsThisMonth, billingInfo.usage.agentCallsLimit]);

  const subscribeToPlan = async (plan: SubscriptionPlan) => {
    if (plan === 'free') {
      setBillingInfo({ 
        plan: 'free',
        usage: getDefaultUsage('free'),
      });
      return;
    }

    setIsLoading(true);
    try {
      // In production, this would:
      // 1. Load TossPayments SDK
      // 2. Call requestBillingAuth() to open card registration
      // 3. Handle redirect and issue billingKey
      // 4. Store billingKey and start subscription
      
      // For demo, simulate successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setBillingInfo({
        plan,
        cardLast4: '1234',
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        usage: getDefaultUsage(plan),
      });
    } catch (error) {
      console.error('Subscription failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelSubscription = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setBillingInfo({ 
        plan: 'free',
        usage: getDefaultUsage('free'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updatePaymentMethod = async () => {
    setIsLoading(true);
    try {
      // Would open TossPayments card registration again
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BillingContext.Provider value={{ 
      billingInfo, 
      isLoading, 
      subscribeToPlan, 
      cancelSubscription,
      updatePaymentMethod,
      incrementAgentUsage,
      canUseAgent,
    }}>
      {children}
    </BillingContext.Provider>
  );
}
