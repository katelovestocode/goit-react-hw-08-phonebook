import React from 'react';
import { Label, Input, Text, Title } from "./Filter.styled"
import { Box } from "../Box"
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
    return <Box display="flex" flexDirection="column" alignItems='center' justifyContent="center" p={30} >
        <Title> Contacts </Title>
        <Label> <Text> Find Contact by Name </Text>
            <Input type="text" value={value} onChange={onChange} /> </Label> </Box>
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};