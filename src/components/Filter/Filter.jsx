import { Label, Input } from './Filter.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, changeFilter } from '../../redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterContact = event => dispatch(changeFilter(event.target.value));

  return (
    <Label>
      Filter by name
      <Input
        type="text"
        value={filter}
        onChange={filterContact}
        placeholder="Я шукаю..."
      />
    </Label>
  );
};

