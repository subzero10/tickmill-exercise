export interface User {
    id: string;
    firstName: string;
    lastName: string;
    role?: 'USER' | 'ADMIN';
    email: string;
    password?: string;
    phone?: string;
    avatar?: string | null;
    createdAt: string;
    updatedAt: string;
}
