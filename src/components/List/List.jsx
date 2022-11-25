import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/contactSlice';
import { ListItem } from '../ListItem/ListItem'
import { ContactList, Message } from './List.styled';

export const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContact = getVisibleContact();

  return (
    <ContactList>
      {visibleContact.length > 0 ? (
        visibleContact.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              contactId={id}
              name={name}
              number={number}
              onClickRemove={onDeleteContact}
            />
          );
        })
      ) : (<Message>Нема нічого</Message>
      )}
    </ContactList>
  )
};
