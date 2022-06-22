import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import validationContactForm from './validationContactForm';
import { ContactFormContainer } from './ContactForm.styled';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = async value => {
    const { name, number } = await value;

    return this.setState({ name: name, number: number });
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{ name: '', number: '' }}
          onSubmit={(values, actions) =>
            this.handleSubmit(values).then(() => {
              this.props.onSubmit(values);
              actions.resetForm();
            })
          }
          validationSchema={validationContactForm}
        >
          <Form>
            <ContactFormContainer>
              <Field
                as={TextField}
                name="name"
                label="Name"
                type="text"
                autoComplete="off"
                size="small"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                name="number"
                label="Number"
                type="tel"
                autoComplete="off"
                size="small"
                helperText={<ErrorMessage name="number" />}
              />
              <Button type="submit" variant="outlined">
                Add contact
              </Button>
            </ContactFormContainer>
          </Form>
        </Formik>
      </>
    );
  }
}
