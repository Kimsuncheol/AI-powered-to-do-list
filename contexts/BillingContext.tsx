'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type SubscriptionPlan = 'free' | 'pro' | 'enterprise';

interface BillingInfo {
  plan: SubscriptionPlan;
  billingKey?: string;
  cardLast4?: string;
  nextBillingDate?: Date;
}

interface BillingContextValue {
  billingInfo: BillingInfo;
  isLoading: boolean;
  subscribeToPlan: (plan: SubscriptionPlan) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  updatePaymentMethod: () => Promise<void>;
}

const defaultBillingInfo: BillingInfo = {
  plan: 'free',
};

const BillingContext = createContext<BillingContextValue>({
  billingInfo: defaultBillingInfo,
  isLoading: false,
  subscribeToPlan: async () => {},
  cancelSubscription: async () => {},
  updatePaymentMethod: async () => {},
});

export const useBilling = () => useContext(BillingContext);

// TossPayments Client Key - should be in env
const TOSS_CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

export function BillingProvider({ children }: { children: ReactNode }) {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(defaultBillingInfo);
  const [isLoading, setIsLoading] = useState(false);

  const subscribeToPlan = async (plan: SubscriptionPlan) => {
    if (plan === 'free') {
      setBillingInfo({ plan: 'free' });
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
      setBillingInfo({ plan: 'free' });
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
      updatePaymentMethod 
    }}>
      {children}
    </BillingContext.Provider>
  );
}
