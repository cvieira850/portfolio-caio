import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField, ButtonDiv } from './styles';

export default () => (
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
      <Input type="text" name="name" component="input" aria-label="name" placeholder="Nome Completo*" />
    </InputField>
    <InputField>
      <Input id="email" aria-label="email" component="input" type="email" name="email" placeholder="E-mail*" />
    </InputField>
    <InputField>
      <textarea
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Mensagem*"
      ></textarea>
    </InputField>

    <Center>
      <Button secondary type="submit">
        Enviar
      </Button>
    </Center>
  </form>
);
