import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {Form, Input, Label, Text, Button} from "./RegisterForm.styled"

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        <Text> Username </Text>
        <Input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Must contain uppercase and lowercase letters"/>
      </Label>

      <Label >
        <Text> Email </Text>
        <Input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
      </Label>

      <Label >
        <Text> Password </Text>
        <Input type="password" name="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
