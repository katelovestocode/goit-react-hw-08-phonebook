import React from 'react';
import { Label, Input, Text, Title } from "./Filter.styled"
import {Box} from "../Box"

const Filter = ({value, onChange}) => {
    return <Box display="flex" flexDirection="column" alignItems='center' justifyContent="center" p={30} >
        <Title> Contacts </Title>
        <Label> <Text> Find Contact by Name </Text>
            <Input type="text" value={value} onChange={onChange} /> </Label> </Box>
}

export default Filter;