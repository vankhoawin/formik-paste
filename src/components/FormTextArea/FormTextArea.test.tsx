import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { Button, FormLabel, Text } from '@twilio-paste/core';

import { FormTextArea } from './FormTextArea';

test('types into the textarea and submits the form', async () => {
  const onSubmitFormHandler = jest.fn();
  const TEST_ID = 'message-textarea';
  const message = 'loremipsumloremipsumloremipsumloremipsum';

  const { getByTestId, getByText } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ message: '' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="message" required={true}>
              Message
            </FormLabel>
            <FormTextArea id="message" name="message" placeholder="Enter message" data-testid={TEST_ID} />
            <Text as="p">{values.message.length} characters</Text>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Theme.Provider>,
  );

  const textarea = getByTestId(TEST_ID);

  await act(async () => {
    fireEvent.change(textarea, {
      target: { value: message },
    });
    fireEvent.click(getByText(/Submit/));
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ message }, expect.anything());
});

test('tests optional `onChange` and `onBlur` event handlers', async () => {
  const onSubmitFormHandler = jest.fn();
  const onChangeInputHandler = jest.fn();
  const onBlurInputHandler = jest.fn();
  const TEST_ID = 'message-textarea';
  const message = 'loremipsumloremipsumloremipsumloremipsum';

  const { getByTestId } = render(
    <Theme.Provider theme="default">
      <Formik initialValues={{ message: '' }} onSubmit={onSubmitFormHandler}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="message" required={true}>
              Message
            </FormLabel>
            <FormTextArea
              id="message"
              name="message"
              placeholder="Enter message"
              data-testid={TEST_ID}
              onChange={onChangeInputHandler}
              onBlur={onBlurInputHandler}
            />
            <Text as="p">{values.message.length} characters</Text>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Theme.Provider>,
  );

  const textarea = getByTestId(TEST_ID);

  await act(async () => {
    fireEvent.change(textarea, {
      target: { value: message },
    });
    fireEvent.blur(textarea);
  });

  expect(onChangeInputHandler).toHaveBeenCalledTimes(1);
  expect(onBlurInputHandler).toHaveBeenCalledTimes(1);
});
