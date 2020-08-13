import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { Button } from '@twilio-paste/core';

import { Checkbox } from './Checkbox';

test('checks and unchecks a checkbox', async () => {
  const onSubmitFormHandler = jest.fn();
  const TEST_ID = 'agreement-checkbox';

  const { getByTestId, getByText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ checkbox: false }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Checkbox id="id" data-testid={TEST_ID} name="checkbox">
              I declare the information provided above is accurate. I acknowledge that Twilio will process the
              information provided above for the purpose of identity verification, and will be sharing it with my local
              telecomm providers or authorities where required by local law. I understand that Twilio phone numbers may
              be taken out of service for inaccurate or false information.
            </Checkbox>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Theme.Provider>,
  );

  const checkbox = getByTestId(TEST_ID);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: true }, expect.anything());

  await act(async () => {
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(2);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ checkbox: false }, expect.anything());
});
