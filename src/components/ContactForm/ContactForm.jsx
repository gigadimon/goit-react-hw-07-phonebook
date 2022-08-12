import { useState } from 'react';

import { ContactFormMarkup } from './ContactFormMarkup';
import { useAddContactMutation } from 'redux/contactSlice';

export function ContactForm() {
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

    addContact({
      name,
      phone,
    });

    reset();
  };

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <ContactFormMarkup
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      name={name}
      phone={phone}
      isLoading={isLoading}
    />
  );
}
