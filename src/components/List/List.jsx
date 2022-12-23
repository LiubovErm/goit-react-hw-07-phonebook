import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactSlice';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { ListItem } from '../ListItem/ListItem'
import { ContactList} from './List.styled';
import { useMemo } from 'react';

export const List = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const { isLoading } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const visibleContact = useMemo(() => {
    return (
        contacts?.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        ) ?? []
    );
}, [filter, contacts]);

  return (
    <>
    <ContactList>
    {isLoading ? (<p> Loading... </p>) : 
      (visibleContact.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              contactId={id}
              name={name}
              number={number}
            />
          );
        })
      ) 
      }
    </ContactList>
   </>
  )
};
