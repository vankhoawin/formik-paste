// import { action } from '@storybook/addon-actions';
import { Button } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
};

export const Basic: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ checkbox: true }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Checkbox id="agreement-checkbox" name="checkbox">
            I declare the information provided above is accurate. I acknowledge that Twilio will process the information
            provided above for the purpose of identity verification, and will be sharing it with my local telecomm
            providers or authorities where required by local law. I understand that Twilio phone numbers may be taken
            out of service for inaccurate or false information.
          </Checkbox>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
