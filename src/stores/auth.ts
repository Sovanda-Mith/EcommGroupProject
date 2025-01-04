// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: !!localStorage.getItem('isLoggedIn'),
  }),
  actions: {
    signup(name: string, email: string, passwd: string) {
      this.isAuthenticated = true;

      // Save to localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('passwd', passwd);
    },
    login(email: string, password: string): boolean {
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('passwd');
        if (!storedName || !storedEmail || !storedPassword) return false; 
  
        // Check if the token contains the correct email and password
        if (email === storedEmail && password === storedPassword) {
            this.isAuthenticated = true;
            return true; // Login successful
        }
        return false; // Login failed
      },
    logout() {
      this.isAuthenticated = false;

      // Remove from localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('passwd');
    },
  },
});
