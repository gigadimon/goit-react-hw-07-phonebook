import { useState } from 'react';

import { ContactFormMarkup } from './ContactFormMarkup';
import { useAddContactMutation, contactsApi } from 'redux/contactSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactExistsNotify = () =>
  toast.error('This contact is already in your phonebook', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export function ContactForm() {
  const { data: contacts } = contactsApi.endpoints.getContacts.useQueryState();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(event.currentTarget.value);
      case 'phone':
        return setPhone(event.currentTarget.value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    contacts.filter(contact => contact.name === name || contact.phone === phone)
      .length === 0
      ? addContact({
          name,
          phone,
        })
      : contactExistsNotify();

    reset();
  };

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <>
      <ContactFormMarkup
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        phone={phone}
        isLoading={isLoading}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
