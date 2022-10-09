import React from 'react';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import { ContainerPhonebook, SearchMessage } from './Phonebook.styled';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filtered = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerPhonebook>
      <UserMenu />
      <Box as="h1" pt="25px">
        Phonebook
      </Box>
      <ContactForm />
      {isLoading && !error && <b>... Loading ...</b>}
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          {filter === '' ? (
            <ContactList />
          ) : filtered.length === 0 ? (
            <SearchMessage>Contact not found</SearchMessage>
          ) : (
            <ContactList />
          )}
        </>
      )}
    </ContainerPhonebook>
  );
};
