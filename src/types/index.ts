// src/types/index.ts
export interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  role?: 'FARMER' | 'SUPPLIER' | 'BUYER' | 'ADMIN';
  kycStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt?: Date;
}

export interface Product {
  id: string | number;
  name: string;
  description: string;
  category: string;
  // price fields in mock data may be formatted strings (e.g. '₦25,000/bag')
  price: number | string;
  groupPrice?: number | string;
  minOrder?: number;
  location: string;
  weight?: string;
  shelfLife?: string;
  storage?: string;
  features?: string[];
  // some places use a single `image` emoji, others use `images`
  image?: string;
  images?: string[];
  rating?: number;
  reviewCount?: number;
  sellerId?: string;
  createdAt?: Date;
}

export type Page =
  | 'home'
  | 'login'
  | 'dashboard'
  | 'products'
  | 'groups'
  | 'group-purchase'
  | 'feedback';

export interface MarketGroup {
  id: string | number;
  name: string;
  location?: string;
  members?: number;
  products?: number;
  image?: string;
  description?: string;
  established?: string;
  specialty?: string;
}

export interface GroupPurchase {
  id: string | number;
  product: string;
  image?: string;
  originalPrice?: string | number;
  groupPrice?: string | number;
  savings?: string | number;
  membersNeeded?: number;
  currentMembers?: number;
  deadline?: string;
  location?: string;
  organizer?: string;
  progress?: number;
  description?: string;
}

export interface FeedbackForm {
  name: string;
  email: string;
  message: string;
  category?: string;
  rating?: number;
  contactPermission?: boolean;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  location: string;
  specialty: string;
  maxMembers: number;
  isPrivate: boolean;
  requireApproval: boolean;
  minOrderValue?: number;
  contactEmail: string;
  contactPhone: string;
  rating: number;
  totalSavings: number;
  nextOrder?: Date;
  createdAt: Date;
}

export interface Order {
  id: string;
  productId: string;
  buyerId: string;
  quantity: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  deliveryAddress: string;
  deliveryMethod: string;
  deliveryFee: number;
  createdAt: Date;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selected: boolean;
}