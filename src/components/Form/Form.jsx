import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/contactSlice';
import { Box } from '../Box/Box';
import { Label, Input, Button } from './Form.styled';
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';

export function Form () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.log('error');;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notiflix.Notify.failure(`${name} is already in contacts`)
      : dispatch(addContact(newContact));
    
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <Box as='form' onSubmit={onSubmitForm} autoComplete='off' display='flex' flexDirection='column' maxWidth={500} mx='auto'>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}   
            onChange={handleChange}
            id={nameInputId}
            placeholder="Імя Прізвище"
            autoComplete='off'
          />
        </Label>
        <Label htmlFor={telInputId}>
          Number
          <Input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number} 
            onChange={handleChange}
            id={telInputId}
            placeholder="Номер телефона"
            autoComplete='off'
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Box>
    );
  }


