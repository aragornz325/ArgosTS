import { create } from "zustand";
import { IProfile, IUser } from '../interfaces/user.interface';

type AuthStore = {
    loggedIn: boolean;
    user: IUser | null;
    token: string | null;
    profile: IProfile | null;
    changeToken: (token: string) => void;
    changeLogged: () => void;
    setUser: (user: IUser) => void;
    setProfile: (profile: IProfile) => void;
}

export const useAuthStore = create<AuthStore>((set)=>({
    loggedIn: false,
    user: null,
    token: null,
    profile: null,
    changeLogged: () => {
        set((state) => ({loggedIn: !state.loggedIn}));
    },
    changeToken: (token: string) => set({ token }),
    setUser: (newUser: IUser) => {
        set(() => ({user: newUser}));
    },
    setProfile: (newProfile: IProfile) => {
        set(() => ({profile: newProfile}));
    },
}));

