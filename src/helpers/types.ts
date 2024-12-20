export interface User {
    username: string;
    email: string;
}


export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface ApiError {
    message: string;
    statusCode: number;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthState {
    user: User;
    tokens: Tokens;
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
    username: string;
    certificateNumber: string;
    email: string;
    bio: string;
    location: string;
    website: string;
    links: { link: string, url: string }[];
    error: string;
}

