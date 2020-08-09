import * as React from 'react';
import { FieldProps } from 'formik';
import { FormInput as $FormInput, FormInputProps as $FormInputProps } from '@twilio-paste/core';

import { FormikFieldProps } from '../../interfaces';
import { Field } from '../Field';

export type FormInputProps = FormikFieldProps & Omit<$FormInputProps, 'value'>;

export const FormInput = React.forwardRef(
  (
    { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: FormInputProps,
    ref: React.Ref<typeof $FormInput>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$FormInput
          {...restProps}
          ref={(ref as unknown) as React.RefObject<HTMLInputElement>}
          name={name}
          value={value}
          onChange={(event) => {
            onChange(event);
            $onChange?.(event);
          }}
          onBlur={(event) => {
            onBlur(event);
            $onBlur?.(event);
          }}
        />
      )}
    </Field>
  ),
);

FormInput.displayName = 'FormInput';

export default FormInput;
