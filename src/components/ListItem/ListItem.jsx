import { useSelector, useDispatch } from 'react-redux';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { isOpen, contactIdModal } from '../../redux/modalSlice';
import { Modal } from '../Modal/Modal';
import { ContactItem, TextWrapper, Name, Number, ButtonDelete, ButtonEdit } from './ListItem.styled';
import { ImCross } from "react-icons/im";
import { ImPencil2 } from "react-icons/im";
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ListItem = ({ name, number, contactId }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.modal.isOpen);
  const modalId = useSelector(state => state.modal.contactId);

  const onDeleteContact = contactId => {
    deleteContact(contactId);
    Notiflix.Notify.success(`Видалено`)
  }

  const onUpdateContact = event => {
    const id = event.currentTarget.parentElement.id;
    dispatch(contactIdModal(id));
    dispatch(isOpen('editContact'));
  };

  return (
    <>
      <ContactItem id={contactId}>
        <TextWrapper>
          <Name>{name}:</Name> 
          <Number>{number}</Number> 
        </TextWrapper>
        <ButtonEdit type="button" onClick={onUpdateContact} disabled={isLoading}><ImPencil2 /></ButtonEdit>
        <ButtonDelete type="button" onClick={() => onDeleteContact(contactId)}><ImCross/></ButtonDelete>
      </ContactItem>
     {modalOpen === 'editContact' && contactId === modalId && (<Modal id={contactId}></Modal>)}
    </>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};