import { ContactItem, Button, TextName } from './ListItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ListItem = ({ name, number, contactId }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const onDeleteContact = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success(`Видалено`)
  }

  return (
    <ContactItem>
       <TextName>{name}: </TextName> {number}
       <Button type="button" onClick={() => onDeleteContact(contactId)} disabled={isLoading}>Delete</Button>
    </ContactItem>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};