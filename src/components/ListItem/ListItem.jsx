import { useDeleteContactMutation } from '../../redux/contactsApi';
import { ContactItem, TextWrapper, Name, Number, ButtonDelete} from './ListItem.styled';
import { ImCross } from "react-icons/im";
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ListItem = ({ name, number, contactId }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onDeleteContact = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success(`Видалено`)
  }

  return (
    <>

      <ContactItem id={contactId}>
        <TextWrapper>
          <Name>{name}:</Name> 
          <Number>{number}</Number> 
        </TextWrapper>
        <ButtonDelete type="button" onClick={() => onDeleteContact(contactId)} disabled={isLoading}><ImCross/></ButtonDelete>
      </ContactItem>
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};