import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { Input } from './Filter.styled';
import { filter } from 'redux/contacts/redusers';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const handleChangeFilter = evt => {
    dispatch(filter(evt.target.value));
  };

  return (
    <Box
      as="label"
      display="flex"
      gridGap="10px"
      alignItems="center"
      htmlFor="filter"
    >
      Find contacts by name
      <Input
        type="input"
        value={filterValue}
        onChange={handleChangeFilter}
      ></Input>
    </Box>
  );
};
