import { Button, FormLabel } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { Option } from '../Option';
import { Select } from './Select';

export default {
  title: 'Select',
};

export const Basic: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ callbackMethod: 'get' }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="callbackMethod">Callback Method</FormLabel>
          <Select required id="callbackMethod" name="callbackMethod">
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
            <Option value="put">PUT</Option>
          </Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);

export const SelectWithOnChangeCallback: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{ callbackMethod: 'get' }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="callbackMethod">Callback Method</FormLabel>
          <Select
            required
            id="callbackMethod"
            name="callbackMethod"
            onChange={(e) => {
              window.alert(`new value: ${e.target.value}`);
            }}
          >
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
            <Option value="put">PUT</Option>
          </Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  </Theme.Provider>
);
