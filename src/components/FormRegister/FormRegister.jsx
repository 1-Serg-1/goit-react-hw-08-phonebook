import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContact,
  Input,
  Label,
  ErrorText,
  BtnAdd,
} from '../ContactForm/ContactForm.styled';
import { register } from 'redux/auth/operations';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[A-Z][a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna",
      }
    )
    .required('Name is a required field'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters')
    .max(8, 'Password must be at most 8 characters')
    .required('Password is a required field'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const FormRegister = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormContact autoComplete="off">
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" placeholder="Name"></Input>
            <FormError name="name" component="p" />
          </Label>
          <Label htmlFor="email">
            Email
            <Input type="email" name="email" placeholder="Email"></Input>
            <FormError name="email" component="p" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              placeholder="Password"
            ></Input>
            <FormError name="error" component="p" />
          </Label>
          <BtnAdd type="submit">SIGN UP</BtnAdd>
        </FormContact>
      </Formik>
    </>
  );
};
