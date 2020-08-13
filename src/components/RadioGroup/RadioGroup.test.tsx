import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { Button } from '@twilio-paste/core';

import { Radio } from '../Radio';
import { RadioGroup } from './RadioGroup';

test('types into an input and submits the form', async () => {
  const onSubmitFormHandler = jest.fn();
  const RADIO_TEST_ID = 'ongoing-test-id';

  const { getByTestId, getByText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ campaign: 'enddate' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <RadioGroup id="campaign" name="campaign" legend="When should your campaign run?">
              <Radio id="ongoing" value="ongoing" name="campaign" data-testid={RADIO_TEST_ID}>
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
    </Theme.Provider>,
  );

  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.click(getByTestId(RADIO_TEST_ID));
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ campaign: 'ongoing' }, expect.anything());
});

test('tests optional `onChange` event handlers', async () => {
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const RADIO_TEST_ID = 'ongoing-test-id';

  const { getByTestId } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ campaign: 'enddate' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <RadioGroup
              id="campaign"
              name="campaign"
              legend="When should your campaign run?"
              onChange={onChangeInputHandler}
            >
              <Radio id="ongoing" value="ongoing" name="campaign" data-testid={RADIO_TEST_ID}>
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
    </Theme.Provider>,
  );

  await act(async () => {
    fireEvent.click(getByTestId(RADIO_TEST_ID));
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
});
