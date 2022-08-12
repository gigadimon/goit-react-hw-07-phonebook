import {
  createReducer,
  createAction,
  // createAsyncThunk,
  // combineReducers,
} from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { contactsAPI } from 'contactsAPI';

export const setFilter = createAction('contacts/setFilter');

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const filterReducer = createReducer('', {
  [setFilter]: (_, action) => action.payload,
});

export const selectFilter = state => state.filter;

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;

/* Ниже реализация через createAsyncThunk */

// export const getContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await contactsAPI.fetchContacts();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, { rejectWithValue }) => {
//     try {
//       const response = await contactsAPI.addContact(newContact);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await contactsAPI.deleteContact(id);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response);
//     }
//   }
// );

// const itemsReducer = createReducer([], {
//   [getContacts.fulfilled]: (_, action) => action.payload,
//   [addContact.fulfilled]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact.fulfilled]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload.id),
// });

// const addingReducer = createReducer(false, {
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
// });

// export const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
//   isAdding: addingReducer,
// });

// export const selectContacts = state => state.contacts.items;
// export const selectIsAdding = state => state.contacts.isAdding;
