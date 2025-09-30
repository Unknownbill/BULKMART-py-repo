// src/types/index.ts
export interface User {
  email: string;
  username?: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  location: string;
  image: string;
  category: string;
  description: string;
}

export interface MarketGroup {
  id: number;
  name: string;
  location: string;
  members: number;
  products: number;
  image: string;
  description: string;
  established: string;
  specialty: string;
}

export interface GroupPurchase {
  id: number;
  product: string;
  image: string;
  originalPrice: string;
  groupPrice: string;
  savings: string;
  membersNeeded: number;
  currentMembers: number;
  deadline: string;
  location: string;
  organizer: string;
  progress: number;
  description: string;
}

export interface FeedbackForm {
  name: string;
  email: string;
  category: string;
  rating: number;
  message: string;
  contactPermission: boolean;
}