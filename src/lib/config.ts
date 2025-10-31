// src/lib/config.ts
export const config = {
  app: {
    name: 'BULKGRO',
    version: '1.0.0',
    description: 'Agricultural Marketplace for Bulk Purchasing',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 30000,
  },
  features: {
    enableKYC: process.env.NEXT_PUBLIC_ENABLE_KYC === 'true',
    enablePayments: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true',
    enableGroups: process.env.NEXT_PUBLIC_ENABLE_GROUPS === 'true',
  },
  payments: {
    currency: 'NGN',
    taxRate: 0, // 0% for agricultural products
    deliveryFee: 3000,
    freeDeliveryThreshold: 100000,
  },
  limits: {
    maxProductImages: 5,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxGroupMembers: 100,
  },
} as const;