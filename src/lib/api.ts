import axios from 'axios';
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '../types/auth';

// Mock user data
const mockUsers = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
  },
];

// Create axios instance
export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock API functions
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = mockUsers.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;
    const token = 'mock-jwt-token';

    return {
      user: userWithoutPassword,
      token,
    };
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (mockUsers.some((u) => u.email === credentials.email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: String(mockUsers.length + 1),
      ...credentials,
    };

    mockUsers.push(newUser);

    const { password, ...userWithoutPassword } = newUser;
    const token = 'mock-jwt-token';

    return {
      user: userWithoutPassword,
      token,
    };
  },

  logout: async (): Promise<void> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    localStorage.removeItem('token');
  },
};
