// src/data/mockData.ts
import { Product, MarketGroup, GroupPurchase } from '../types';

export const products: Product[] = [
  { id: 1, name: 'Premium Ofada Rice', price: '₦25,000/bag', location: 'Kano', image: '🍚', category: 'grains', description: 'High-quality locally grown Ofada rice, perfect for traditional Nigerian dishes.' },
  { id: 2, name: 'Fresh Tomatoes', price: '₦15,000/crate', location: 'Lagos', image: '🍅', category: 'vegetables', description: 'Freshly harvested tomatoes from Ogun state farms, ideal for cooking and processing.' },
  { id: 3, name: 'Brown Beans', price: '₦22,000/bag', location: 'Kaduna', image: '🫘', category: 'grains', description: 'Nutritious brown beans, rich in protein and essential nutrients.' },
  { id: 4, name: 'Ripe Plantains', price: '₦8,000/bunch', location: 'Ogun', image: '🍌', category: 'fruits', description: 'Sweet ripe plantains perfect for frying, boiling, or making plantain chips.' },
  { id: 5, name: 'Pure Palm Oil', price: '₦18,000/jerrican', location: 'Delta', image: '🛢️', category: 'oils', description: '100% pure palm oil extracted using traditional methods for authentic flavor.' },
  { id: 6, name: 'Yam Tubers', price: '₦12,000/100 pieces', location: 'Benue', image: '🍠', category: 'tubers', description: 'Fresh yam tubers from the yam belt of Nigeria, suitable for various dishes.' },
  { id: 7, name: 'Yellow Maize', price: '₦20,000/bag', location: 'Kano', image: '🌽', category: 'grains', description: 'High-quality yellow maize ideal for animal feed and human consumption.' },
  { id: 8, name: 'Fresh Onions', price: '₦10,000/bag', location: 'Kaduna', image: '🧅', category: 'vegetables', description: 'Fresh onions with strong flavor, perfect for cooking and seasoning.' }
];

export const marketGroups: MarketGroup[] = [
  { 
    id: 1, 
    name: 'Lagos Farmers Cooperative', 
    location: 'Lagos', 
    members: 245, 
    products: 12, 
    image: '🏙️',
    description: 'Leading agricultural cooperative in Lagos state specializing in vegetable farming',
    established: '2018',
    specialty: 'Vegetables'
  },
  // ... other groups
];

export const groupPurchases: GroupPurchase[] = [
  { 
    id: 1, 
    product: 'Premium Ofada Rice', 
    image: '🍚', 
    originalPrice: '₦28,000', 
    groupPrice: '₦25,000', 
    savings: '₦3,000', 
    membersNeeded: 10,
    currentMembers: 7,
    deadline: '2023-12-31',
    location: 'Nationwide',
    organizer: 'Lagos Farmers Coop',
    progress: 70,
    description: 'Bulk purchase of high-quality Ofada rice directly from Kano farmers'
  },
  // ... other purchases
];