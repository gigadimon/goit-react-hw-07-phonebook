import { ContactForm } from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export { App };
