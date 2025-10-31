export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
}