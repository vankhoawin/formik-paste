import { Button } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { Radio } from '../Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'RadioGroup',
};

export const Basic: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ callbackMethod: 'ongoing' }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <RadioGroup id="callbackMethod" name="callbackMethod" legend="When should your campaign run?">
            <Radio id="ongoing" value="ongoing" name="campaign">
              Run my ads as ongoing
            </Radio>
            <Radio id="enddate" value="enddate" name="campaign">
              Set a start and end date
            </Radio>
          </RadioGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
