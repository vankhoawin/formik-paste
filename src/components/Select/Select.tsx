import * as React from 'react';
import { FieldProps } from 'formik';
import { Select as $Select, SelectProps as $SelectProps } from '@twilio-paste/core';

import { FormikFieldProps } from '../../interfaces';
import { Field } from '../Field';

export type SelectProps = FormikFieldProps &
  Omit<$SelectProps, 'value' | 'onChange'> &
  Partial<Pick<$SelectProps, 'onChange'>>;

export const Select: React.FC<SelectProps> = ({ name, validate, fast, children, onChange, onBlur, ...restProps }) => {
  return (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps<string | string[]>) => (
        <$Select
          value={value}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
            onChange?.(e);
          }}
          onBlur={(e) => {
            setFieldTouched(name);
            onBlur?.(e);
          }}
          {...restProps}
        >
          {children}
        </$Select>
      )}
    </Field>
  );
};

Select.displayName = 'Select';

export default Select;
