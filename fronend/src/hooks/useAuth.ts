"use client";

import { useEffect, useState } from "react";

import type { User } from "@/types/user";

import {
    getCurrentUser,
    loginUser,
    logoutUser,
    registerUser,
} from "@/lib/auth";

export default function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const currentUser = getCurrentUser();

        setUser(currentUser);
        setIsLoading(false);
    }, []);

    const login = async (
        email: string,
        password: string
    ): Promise<boolean> => {
        const loggedInUser = await loginUser(email, password);

        if (!loggedInUser) {
            return false;
        }

        setUser(loggedInUser);

        return true;
    };

    const register = async (
        name: string,
        email: string,
        password: string
    ): Promise<boolean> => {
        const newUser = await registerUser(
            name,
            email,
            password
        );

        if (!newUser) {
            return false;
        }

        setUser(newUser);

        return true;
    };

    const logout = () => {
        logoutUser();
        setUser(null);
    };

    return {
        user,
        isLoading,
        isLoggedIn: !!user,
        login,
        register,
        logout,
    };
}