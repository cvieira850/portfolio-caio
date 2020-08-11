import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

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
    <input type="text" name="name" placeholder="Your name" className="form-control" />
    <input type="email" name="email" placeholder="Your email" className="form-control" />
    <button type="submit" className="btn form-control submit-btn">
      subscribe
    </button>
  </form>
);
