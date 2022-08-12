import { nanoid } from 'nanoid';
import s from './Filter.module.css';
import { DebounceInput } from 'react-debounce-input';

import { setFilter, selectFilter } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const inputId = nanoid();
  return (
    <>
      <label htmlFor={inputId} className={s.label}>
        Find contacts by name
      </label>
      <DebounceInput
        type="text"
        name="filter"
        value={filter}
        debounceTimeout={300}
        onChange={event => dispatch(setFilter(event.target.value))}
        className={s.input}
      />
    </>
  );
}
