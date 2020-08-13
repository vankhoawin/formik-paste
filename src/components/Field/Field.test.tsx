import { Formik, FieldProps } from 'formik';
import * as React from 'react';
import { fireEvent, render, act } from '@testing-library/react';

import { Field } from './Field';

test('tests fast form', async () => {
  const FORM_ID = 'form-id';
  const onSubmitFormHandler = jest.fn();
  const firstName = 'Van';

  const { getByLabelText, getByText } = render(
    <Formik initialValues={{ firstName: '' }} onSubmit={onSubmitFormHandler}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={FORM_ID}>First Name</label>
          <Field name="firstName" fast={true}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {({ field }: FieldProps<string>) => <input id={FORM_ID} type="text" {...field} />}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>,
  );

  const input = getByLabelText(/First Name/);
  const submitButton = getByText(/Submit/);

  await act(async () => {
    fireEvent.change(input, {
      target: { value: firstName },
    });
    fireEvent.click(submitButton);
  });

  expect(onSubmitFormHandler).toHaveBeenCalledTimes(1);
  expect(onSubmitFormHandler).toHaveBeenCalledWith({ firstName }, expect.anything());
});
