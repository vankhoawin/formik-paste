import { Button, FormLabel, FormHelpText } from '@twilio-paste/core';
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
      initialValues={{ emailAddress: '' }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
          <FormInput id="emailAddress" name="emailAddress" type="email" placeholder="example@twilio.com" />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);

export const NumberInputWithValidation: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ positiveNumber: undefined }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        const positiveNumber = Number(values.positiveNumber);

        if (isNaN(positiveNumber)) {
          errors.positiveNumber = 'Input is not a number';
        } else if (positiveNumber < 0) {
          errors.positiveNumber = 'Number is not positive';
        }

        return errors;
      }}
    >
      {({ errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="positiveNumber">Positive Number</FormLabel>

          <FormInput
            aria-describedby="positiveNumberErrorHelpText"
            id="positiveNumber"
            name="positiveNumber"
            type="text"
            placeholder="example@twilio.com"
          />

          {errors.positiveNumber && (
            <FormHelpText id="positiveNumberErrorHelpText" variant="error">
              {errors.positiveNumber}
            </FormHelpText>
          )}

          <Button variant="primary" type="submit" disabled={Boolean(errors.positiveNumber)}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
