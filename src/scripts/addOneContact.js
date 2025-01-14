import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();

  console.log('contacts', contacts);

  contacts.push(createFakeContact());

  console.log('contacts', contacts);
  writeContacts(contacts);
};

addOneContact();
