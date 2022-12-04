import { useDispatch } from 'react-redux';
import { useUpdateContactMutation } from '../../redux/contactsApi';
import { isOpen } from '../../redux/modalSlice';
import {
    FormBox,
    StyleUpdateForm,
    Input,
    Label,
    CloseButton,
    EditButton,
} from './UpdateForm.styled';
import { Formik } from 'formik';
import { GrClose } from "react-icons/gr";

export const UpdateForm = ({
    id,
    initialFormValues,
}) => {
  const [editContact] = useUpdateContactMutation();
  const dispatch = useDispatch();

  const onEditContact = async (values, {resetForm}) => {
    try {
        await editContact({ id, ...values });
        resetForm();
        dispatch(isOpen(false));
    } catch (error) {
      console.log(error);
      dispatch(isOpen(false));
    }
  };

  const onClose = () => {
      dispatch(isOpen(false));
  }
    
  return (
    <FormBox>
          
      <Formik initialValues={initialFormValues} onSubmit={onEditContact}>
          <StyleUpdateForm>
            <Label>Name<Input type="text" name="name" /></Label>
            <Label>Number<Input type="tel" name="number" /></Label>
            <EditButton type="submit">Update contact</EditButton>
          </StyleUpdateForm>
      </Formik>
      <CloseButton onClick={onClose}><GrClose/></CloseButton>
          
    </FormBox>
  );
};
