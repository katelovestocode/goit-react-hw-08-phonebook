import React from 'react';
import { Label, Input, Text, Title } from "./Filter.styled"
import { Box } from "../Box"
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter/filterSlice';

const Filter = () => {

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
  const changeFilter = (event) => {
  dispatch(setFilter(event.currentTarget.value));
  }

  return <Box display="flex" flexDirection="column" alignItems='center' justifyContent="center" p={20} >
        <Title> Contacts </Title>
        <Label> <Text> find contact by name </Text>
            <Input type="text" value={filter} onChange={changeFilter} /> </Label> </Box>
}

export default Filter;

