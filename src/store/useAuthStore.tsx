import { create } from "zustand";
import { User } from '../interfaces/user.interface';

type AuthStore = {
    loggedIn: boolean;
    user: User | null;

    changeLogged: () => void;
    setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set)=>({
    loggedIn: false,
    user: null,
    changeLogged: () => {
        set((state) => ({loggedIn: !state.loggedIn}));
    },
    setUser: (newUser: User) => {},
}));

