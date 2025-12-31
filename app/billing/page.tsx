'use client';
import { Container, Typography, Box, Card, CardContent, Button, Chip, Stack, Paper } from '@mui/material';
import { useBilling, SubscriptionPlan } from '@/contexts/BillingContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const plans = [
  {
    id: 'free' as SubscriptionPlan,
    name: 'Free',
    price: '₩0',
    period: '/month',
    description: 'Perfect for getting started',
    features: ['5 Tasks per day', 'Basic AI parsing', 'Email support'],
    color: '#6b7280',
    icon: <CheckCircleIcon />,
  },
  {
    id: 'pro' as SubscriptionPlan,
    name: 'Pro',
    price: '₩9,900',
    period: '/month',
    description: 'Best for professionals',
    features: ['Unlimited Tasks', 'Advanced AI features', 'Priority support', 'Custom tags'],
    color: '#667eea',
    icon: <StarIcon />,
    popular: true,
  },
  {
    id: 'enterprise' as SubscriptionPlan,
    name: 'Enterprise',
    price: '₩29,900',
    period: '/month',
    description: 'For teams and businesses',
    features: ['Everything in Pro', 'Team collaboration', 'Analytics dashboard', 'API access', 'Dedicated support'],
    color: '#764ba2',
    icon: <RocketLaunchIcon />,
  },
];

export default function BillingPage() {
  const { billingInfo, isLoading, subscribeToPlan } = useBilling();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Choose Your Plan
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Unlock the full potential of AI-powered productivity
        </Typography>
      </Box>

      {/* Current Plan Info */}
      {billingInfo.plan !== 'free' && (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 2, 
            bgcolor: 'primary.light',
            border: '1px solid',
            borderColor: 'primary.main',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <CreditCardIcon color="primary" />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Current Plan: {billingInfo.plan.charAt(0).toUpperCase() + billingInfo.plan.slice(1)}
              </Typography>
              {billingInfo.cardLast4 && (
                <Typography variant="body2" color="text.secondary">
                  Card ending in •••• {billingInfo.cardLast4}
                </Typography>
              )}
            </Box>
          </Stack>
        </Paper>
      )}

      {/* Pricing Cards */}
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        spacing={3} 
        justifyContent="center"
        alignItems="stretch"
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            elevation={plan.popular ? 8 : 0}
            sx={{
              flex: 1,
              maxWidth: 360,
              borderRadius: 3,
              border: '2px solid',
              borderColor: plan.popular ? plan.color : 'divider',
              position: 'relative',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              },
            }}
          >
            {plan.popular && (
              <Chip
                label="Most Popular"
                size="small"
                sx={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bgcolor: plan.color,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              />
            )}
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: `${plan.color}20`,
                    color: plan.color,
                    mb: 2,
                  }}
                >
                  {plan.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h3" component="span" sx={{ fontWeight: 'bold' }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" component="span" color="text.secondary">
                  {plan.period}
                </Typography>
              </Box>

              <Stack spacing={1.5} sx={{ mb: 3 }}>
                {plan.features.map((feature) => (
                  <Stack key={feature} direction="row" spacing={1} alignItems="center">
                    <CheckCircleIcon sx={{ color: plan.color, fontSize: 20 }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                fullWidth
                variant={billingInfo.plan === plan.id ? 'outlined' : 'contained'}
                disabled={isLoading || billingInfo.plan === plan.id}
                onClick={() => subscribeToPlan(plan.id)}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  bgcolor: billingInfo.plan === plan.id ? 'transparent' : plan.color,
                  borderColor: plan.color,
                  '&:hover': {
                    bgcolor: billingInfo.plan === plan.id ? 'transparent' : `${plan.color}dd`,
                  },
                }}
              >
                {billingInfo.plan === plan.id ? 'Current Plan' : 'Get Started'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* TossPayments Notice */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="caption" color="text.secondary">
          Payments are securely processed by TossPayments
        </Typography>
      </Box>
    </Container>
  );
}
