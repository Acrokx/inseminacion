import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as string | null
  }),
  actions: {
    login(username: string, password: string) {
      if (username === 'admin' && password === '1234') {
        this.isAuthenticated = true;
        this.user = username;
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    }
  }
});
