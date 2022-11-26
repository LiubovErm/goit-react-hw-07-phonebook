import { Label, Input } from './Filter.styles';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactSlice'

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContact = event => dispatch(changeFilter(event.target.value));

  return (
    <Label>
      Filter by name
      <Input
        type="text"
        onChange={filterContact}
        placeholder="Я шукаю..."
      />
    </Label>
  );
};

