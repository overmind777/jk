export interface User {
    name: string;
    email: string;
    tokens: Tokens;
}

export interface ApiResponse {
    user: User;
    tokens: Tokens;
}

export interface CustomResponse {
    name: string,
    city: string,
    email: string,
    about: string,
    error: string | null,
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

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthState {
    user: User;
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLogin: boolean;
    error: string | null;
}

export interface ModalState {
    isOpen: boolean;
    modalType: string | null;
}

export interface UserState {
    name: string;
    email: string;
    city?: string;
    about?: string;
    error?: string | null;
}

