import { Box } from './Box/Box';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';

export function App () {
    return (
      <Box mx='auto' maxWidth={500} >
        <h2>Phonebook</h2>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <List />
      </Box>
    );
}







