import {defineStore} from "pinia"
import type {IUser} from "@/types/api";

interface UserState {
    user: IUser | null,
    isLoggedIn: boolean,
    lastLoggedInDate: Date | null
}


export const useUserStore = defineStore("user-store", {
    state: (): UserState => ({
        user: null,
        isLoggedIn: false,
        lastLoggedInDate: null
    }),
    actions: {
        setUser(user: IUser) {
            this.user = user
        }
    },
    getters: {
        getUserEmail(): string {
            return this.user?.email ?? ''
        }
    }
})
