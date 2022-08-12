import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactSlice';
import s from './ContactListItem.module.css';

import { RotatingLines } from 'react-loader-spinner';

export default function ContactListItem({ name, phone, id }) {
  const [deleteContact, { isLoading, isSuccess: isDeleted }] =
    useDeleteContactMutation();

  const handleClick = id => {
    deleteContact(id);
  };

  return (
    <>
      {!isDeleted && (
        <li className={s.item}>
          <span className={s.name}>{name}:</span>{' '}
          <span className={s.number}>{phone}</span>
          <button
            onClick={() => handleClick(id)}
            className={s.button}
            disabled={isLoading}
          >
            {isLoading && (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="18"
                visible={true}
              />
            )}
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      )}
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
