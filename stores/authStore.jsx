import create from 'zustand';

export const authStore = create((set) => {
    return {
        user: null,
        setUser: (user) => set({ user }),
    };
});
