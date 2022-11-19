import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "components/ApiService/auth-api/auth-api";

const signup = createAsyncThunk(
    "auth/signup",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

const login = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

const logout = createAsyncThunk(
    "auth/logout",
    async(_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return rejectWithValue('Unable to fetch user');
        }

        try {
            const result = await api.getCurrentUser(persistedToken);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

const authOperations = {
    signup,
    login,
    logout,
    current,
};

export default authOperations;