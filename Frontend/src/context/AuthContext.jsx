import React, { createContext, useContext, useState, useEffect } from 'react';
import { Api, sessionStore, sessionRemove } from '../components/common/Api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("users");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const res = await Api.post('/auth/login', { email, password });
            const { token, user: userData } = res.data.data;
            sessionStore(token, userData);
            setUser(userData);
            return { success: true };
        } catch (error) {
            const errorData = error.response?.data?.errors;
            const message = errorData ? Object.values(errorData)[0] : "Login failed";
            return { success: false, error: message };
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await Api.post('/auth/register', { name, email, password });
            // Optionally auto-login here or just return success
            return { success: true };
        } catch (error) {
            const errorData = error.response?.data?.errors;
            const message = errorData ? Object.values(errorData)[0] : "Registration failed";
            return { success: false, error: message };
        }
    };

    const logout = () => {
        sessionRemove();
        setUser(null);
        window.location.href = "/login";
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
