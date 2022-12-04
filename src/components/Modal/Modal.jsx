import { BackDrop } from './Modal.styled';
import { useGetContactByIdQuery } from '../../redux/contactsApi';
import { UpdateForm } from '../UpdateForm/UpdateForm';

export const Modal = ({ id }) => {
  const { data: contact } = useGetContactByIdQuery(id);

  return (
    <>
      <BackDrop>
        {contact && (
          <UpdateForm
            id={contact.id}
            initialFormValues={{ name: contact.name, number: contact.number }}        
          />
        )}
      </BackDrop>
    </>
  );
};