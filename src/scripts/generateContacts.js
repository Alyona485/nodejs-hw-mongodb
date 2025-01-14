import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

//npm run generate

const generateContacts = async (number) => {
  const contacts = await readContacts();

  console.log('contacts', contacts);

  for (let index = 0; index < number; index++) {
    contacts.push(createFakeContact());
  }
  console.log('contacts', contacts);
  writeContacts(contacts);
};

generateContacts(2);
