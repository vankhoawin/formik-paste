import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { Button, FormLabel } from '@twilio-paste/core';

import { Select } from './Select';
import { Option } from '../Option';

test('types into an input and submits the form', async () => {
  const onSubmitFormHandler = jest.fn();

  const { getByDisplayValue, getByText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ callbackMethod: 'get' }} onSubmit={onSubmitFormHandler}>
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
    </Theme.Provider>,
  );

  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.change(getByDisplayValue(/GET/), { target: { value: 'post' } });
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ callbackMethod: 'post' }, expect.anything());
});

test('tests optional `onChange` and `onBlur` event handlers', async () => {
  const onSubmitFormHandler = jest.fn();
  const onChangeFormHandler = jest.fn();
  const onBlurFormHandler = jest.fn();

  const { getByDisplayValue } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ callbackMethod: 'get' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="callbackMethod">Callback Method</FormLabel>
            <Select
              required
              id="callbackMethod"
              name="callbackMethod"
              onChange={onChangeFormHandler}
              onBlur={onBlurFormHandler}
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
    </Theme.Provider>,
  );

  await act(async () => {
    fireEvent.focus(getByDisplayValue(/GET/));
    fireEvent.change(getByDisplayValue(/GET/), { target: { value: 'post' } });
    fireEvent.blur(getByDisplayValue(/GET/));
  });

  expect(onChangeFormHandler).toHaveBeenCalledTimes(1);
  expect(onBlurFormHandler).toHaveBeenCalledTimes(1);
});
