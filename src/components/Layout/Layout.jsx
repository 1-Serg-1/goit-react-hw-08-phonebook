import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { ContainerPhonebook } from 'components/Phonebook/Phonebook.styled';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  const { isLoading } = useAuth();
  return (
    <ContainerPhonebook>
      <h1>My Phonebook</h1>
      <Navigation />
      {isLoading && <Loader />}
    </ContainerPhonebook>
  );
};
