import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import s from './ContactFormMarkup.module.css';

export function ContactFormMarkup({
  handleSubmit,
  handleChange,
  name,
  phone,
  isLoading,
}) {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="name" className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="phone" className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="phone"
        value={phone}
        onChange={handleChange}
      />
      <button type="submit" className={s.button} disabled={isLoading}>
        {isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="18"
            visible={true}
          />
        )}
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
}

ContactFormMarkup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
