import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { Button, FormLabel } from '@twilio-paste/core';

import { FormInput } from './FormInput';

test('types into an input and submits the form', async () => {
  const onSubmitFormHandler = jest.fn();
  const emailAddress = 'vanguyen@twilio.com';

  const { getByLabelText, getByText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ emailAddress: '' }} onSubmit={onSubmitFormHandler}>
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
    </Theme.Provider>,
  );

  const input = getByLabelText(/Email Address/);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.change(input, {
      target: { value: emailAddress },
    });
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ emailAddress }, expect.anything());
});

test('tests optional `onChange` and `onBlur` event handlers', async () => {
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const onBlurInputHandler = jest.fn();
  const emailAddress = 'vanguyen@twilio.com';

  const { getByLabelText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ emailAddress: '' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
            <FormInput
              id="emailAddress"
              name="emailAddress"
              type="email"
              placeholder="example@twilio.com"
              onChange={onChangeInputHandler}
              onBlur={onBlurInputHandler}
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Theme.Provider>,
  );

  const input = getByLabelText(/Email Address/);

  await act(async () => {
    fireEvent.change(input, {
      target: { value: emailAddress },
    });
    fireEvent.blur(input);
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
  expect(onBlurInputHandler).toHaveBeenCalledTimes(1);
});
