import { Button, FormLabel, Text } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { FormTextArea } from './FormTextArea';

export default {
  title: 'FormTextArea',
};

export const Basic: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="message" required={true}>
            Message (at least 40 characters)
          </FormLabel>
          <FormTextArea id="message" name="message" placeholder="Enter message" />
          <Text as="p">{values.message.length} characters</Text>

          <Button variant="primary" type="submit" disabled={values.message.length < 40}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
