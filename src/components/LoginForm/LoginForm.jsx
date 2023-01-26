// import { useDispatch, useSelector } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import {Form, Input, Label, Button, Text, Warning} from "./LoginForm.styled"
// import { selectIsError } from "../../redux/auth/selectors"


// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const error = useSelector(selectIsError);

  
//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };



//   return (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       {error && <Warning> Please enter correct credentials </Warning>}
//       <Label >
//         <Text> Email </Text>
//         <Input type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
//       </Label>
//       <Label >
//         <Text> Password </Text>
//         <Input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//       title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
//       </Label>
//       <Button type="submit">Log In</Button>
//     </Form>
//   );
// };



