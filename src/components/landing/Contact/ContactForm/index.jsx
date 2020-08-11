import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField, ButtonDiv } from './styles';

export default () => {

  return (
    <form
      className="contact-form"
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <InputField>
        <Input
          as={FastField}
          type="text"
          name="name"
          component="input"
          aria-label="name"
          placeholder="Nome Completo*"
          error={touched.name && errors.name}
        />
        <ErrorMessage component={Error} name="name" />
      </InputField>
      <InputField>
        <Input
          id="email"
          aria-label="email"
          component="input"
          as={FastField}
          type="email"
          name="email"
          placeholder="E-mail*"
          error={touched.email && errors.email}
        />
        <ErrorMessage component={Error} name="email" />
      </InputField>
      <InputField>
        <Input
          as={FastField}
          component="textarea"
          aria-label="message"
          id="message"
          rows="8"
          type="text"
          name="message"
          placeholder="Mensagem*"
          error={touched.message && errors.message}
        />
        <ErrorMessage component={Error} name="message" />
      </InputField>
      {values.name && values.email && values.message && (
        <InputField>
          <FastField
            component={Recaptcha}
            sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
            name="recaptcha"
            onChange={value => setFieldValue('recaptcha', value)}
          />
          <ErrorMessage component={Error} name="recaptcha" />
        </InputField>
      )}
      {values.success && (
        <InputField>
          <Center>
            <h4>Your message has been successfully sent, I will get back to you ASAP!</h4>
          </Center>
        </InputField>
      )}
      <Center>
        <Button secondary type="submit" disabled={isSubmitting}>
          Enviar
          </Button>
      </Center>
    </form>
  )
};
