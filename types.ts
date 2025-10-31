// types.ts or at the top of useAuth.ts
export interface User {
  id: string;
  email: string;
  name: string;
  // add other user properties as needed
}

export interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
}