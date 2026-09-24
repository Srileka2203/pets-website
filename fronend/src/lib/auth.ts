import type { User } from "@/types/user";

const USER_STORAGE_KEY = "tails-tales-user";
const USERS_STORAGE_KEY = "tails-tales-users";

interface StoredUser extends User {
    passwordHash: string;
    salt: string;
}

const PBKDF2_ITERATIONS = 100000;

/**
 * Convert ArrayBuffer to hexadecimal string.
 */
function bufferToHex(buffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(buffer))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

/**
 * Convert hexadecimal string to Uint8Array.
 */
function hexToUint8Array(hex: string): Uint8Array {
    const bytes = new Uint8Array(hex.length / 2);

    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(
            hex.substring(i * 2, i * 2 + 2),
            16
        );
    }

    return bytes;
}

/**
 * Generate a random salt for a password.
 */
function generateSalt(): string {
    const salt = crypto.getRandomValues(
        new Uint8Array(16)
    );

    return bufferToHex(salt.buffer);
}

/**
 * Hash a password using PBKDF2 + SHA-256.
 */
async function hashPassword(
    password: string,
    salt: string
): Promise<string> {
    const encoder = new TextEncoder();
    const passwordData = encoder.encode(password);

    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        passwordData,
        "PBKDF2",
        false,
        ["deriveBits"]
    );

    const saltBytes = hexToUint8Array(salt);

    const saltBuffer = new ArrayBuffer(
        saltBytes.byteLength
    );

    new Uint8Array(saltBuffer).set(saltBytes);

    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt: saltBuffer,
            iterations: PBKDF2_ITERATIONS,
            hash: "SHA-256",
        },
        keyMaterial,
        256
    );

    return bufferToHex(derivedBits);
}

/**
 * Get the currently logged-in user.
 */
export function getCurrentUser(): User | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const storedUser =
            localStorage.getItem(USER_STORAGE_KEY);

        if (!storedUser) {
            return null;
        }

        return JSON.parse(storedUser) as User;
    } catch (error) {
        console.error(
            "Failed to load current user:",
            error
        );

        return null;
    }
}

/**
 * Register a new user.
 */
export async function registerUser(
    name: string,
    email: string,
    password: string
): Promise<User | null> {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const storedUsers =
            localStorage.getItem(USERS_STORAGE_KEY);

        const users: StoredUser[] = storedUsers
            ? (JSON.parse(storedUsers) as StoredUser[])
            : [];

        const normalizedEmail =
            email.trim().toLowerCase();

        const trimmedName = name.trim();

        const existingUser = users.find(
            (user) =>
                user.email.toLowerCase() ===
                normalizedEmail
        );

        if (existingUser) {
            return null;
        }

        const salt = generateSalt();

        const passwordHash = await hashPassword(
            password,
            salt
        );

        const newUser: StoredUser = {
            id: `user-${Date.now()}`,
            name: trimmedName,
            email: normalizedEmail,
            passwordHash,
            salt,
        };

        users.push(newUser);

        localStorage.setItem(
            USERS_STORAGE_KEY,
            JSON.stringify(users)
        );

        const user: User = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        };

        localStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(user)
        );

        // Tell CartContext that the logged-in user changed.
        window.dispatchEvent(
            new Event("tails-tales-auth-change")
        );

        return user;
    } catch (error) {
        console.error(
            "Failed to register user:",
            error
        );

        return null;
    }
}

/**
 * Login an existing user.
 */
export async function loginUser(
    email: string,
    password: string
): Promise<User | null> {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const storedUsers =
            localStorage.getItem(USERS_STORAGE_KEY);

        if (!storedUsers) {
            return null;
        }

        const users =
            JSON.parse(storedUsers) as StoredUser[];

        const normalizedEmail =
            email.trim().toLowerCase();

        const user = users.find(
            (storedUser) =>
                storedUser.email.toLowerCase() ===
                normalizedEmail
        );

        if (!user) {
            return null;
        }

        const passwordHash = await hashPassword(
            password,
            user.salt
        );

        if (passwordHash !== user.passwordHash) {
            return null;
        }

        const currentUser: User = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        localStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(currentUser)
        );

        // Tell CartContext that the logged-in user changed.
        window.dispatchEvent(
            new Event("tails-tales-auth-change")
        );

        return currentUser;
    } catch (error) {
        console.error(
            "Failed to login:",
            error
        );

        return null;
    }
}

/**
 * Logout the current user.
 */
export function logoutUser(): void {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem(USER_STORAGE_KEY);

    // Tell CartContext that the logged-in user changed.
    window.dispatchEvent(
        new Event("tails-tales-auth-change")
    );
}