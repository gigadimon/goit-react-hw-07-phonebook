import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

import { selectFilter, useGetContactsQuery } from 'redux/contactSlice';
import { useSelector } from 'react-redux/es/exports';

export default function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

  return (
    <ul className={s.contactList}>
      {contacts &&
        (filter
          ? contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(({ name, phone, id }) => (
                <ContactListItem name={name} phone={phone} key={id} id={id} />
              ))
          : contacts.map(({ name, phone, id }) => (
              <ContactListItem name={name} phone={phone} key={id} id={id} />
            )))}
    </ul>
  );
}
