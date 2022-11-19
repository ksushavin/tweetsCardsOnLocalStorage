import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "components/ApiService/contacts-api/contacts-api";

const isDublicate = (data, contacts) => {
    const normalizedName = data.name.toLowerCase();

    const result = contacts.find(({ name, number }) => {
        return (normalizedName === name.toLowerCase() && data.number === number)
    })
    return Boolean(result);
}


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await api.getContacts();
            return contacts
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/add',

    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    },

    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isDublicate(data, contacts.items)) {
                alert(`${data.name}: ${data.number} is already exist`);
                return false
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    'contacts/delete',
    async (id, { rejectWithValue }) => {
        try {
            await api.removeContact(id);
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

   