export interface User {
    name: string;
    email: string;
}

export interface ApiResponse {
    user: User;
    token: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthState {
    user: User;
    token: string;
    isAuthenticated: boolean;
    isAdmin: boolean;
    error: string | null;
}