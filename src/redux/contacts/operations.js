import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({name, number}, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', {name, number});
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    console.log(contactId);
    try {
        await axios.delete(`/contacts/${contactId}`);
        const res = await axios.get('/contacts');
        return res.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});