// import { action } from '@storybook/addon-actions';
import { Button, FormLabel } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { FormInput } from './FormInput';

export default {
  title: 'FormInput',
};

export const Basic: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ checkbox: true }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="email_address">Email Address</FormLabel>

          <FormInput
            aria-describedby="email_error_help_text"
            id="email_address"
            name="email_address"
            type="email"
            placeholder="example@twilio.com"
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
