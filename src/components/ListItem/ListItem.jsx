import { ContactItem, Button, TextName } from './ListItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ name, number, contactId, onClickRemove }) => {
  return (
    <ContactItem>
       <TextName>{name}: </TextName> {number}
       <Button type="button" onClick={() => onClickRemove(contactId)}>Delete</Button>
    </ContactItem>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};