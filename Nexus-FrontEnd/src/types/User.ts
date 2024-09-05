// types/User.ts

export interface User {
    _id: string; 
    username?: string; 
    email: string;
    password?: string; 
    googleId?: string; 
    displayName?: string;
    image?: string; 
    subscribe?: boolean; 
    createdAt: string;
    updatedAt: string;
  }
  