import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactSlice';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsApi';
import { ListItem } from '../ListItem/ListItem'
import { ContactList, Message } from './List.styled';

export const List = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

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
            />
          );
        })
      ) : (<Message>Не знайдено нічого</Message>
      )}
    </ContactList>
  )
};
