import { create } from "zustand";
import { User } from '../interfaces/user.interface';

type AuthStore = {
    loggedIn: boolean;
    user: User | null;
    token: string | null;
    changeToken: (token: string) => void;
    changeLogged: () => void;
    setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set)=>({
    loggedIn: false,
    user: null,
    token: null,
    changeLogged: () => {
        set((state) => ({loggedIn: !state.loggedIn}));
    },
    changeToken: (newToken: string) => {
        set(() => ({token: newToken}));
    },
    setUser: (newUser: User) => {
        set(() => ({user: newUser}));
    },
}));

