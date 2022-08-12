import axios from 'axios';

export const fetchContacts = () => {
  return axios.get(
    'https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/contacts'
  );
};

export const addContact = newContact => {
  return axios.post(
    'https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/contacts',
    newContact
  );
};

export const deleteContact = id => {
  return axios.delete(
    `https://62f4edbc535c0c50e765afc2.mockapi.io/api/phonebook/contacts/${id}`
  );
};
