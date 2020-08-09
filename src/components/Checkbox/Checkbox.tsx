import * as React from 'react';
import { FieldProps } from 'formik';
import { Checkbox as $Checkbox, CheckboxProps as $CheckboxProps } from '@twilio-paste/core';

import { FormikFieldProps } from '../../interfaces';
import { Field } from '../Field';

export type CheckboxProps = FormikFieldProps & $CheckboxProps;

export const Checkbox: React.FC<CheckboxProps> = ({ name, validate, fast, ...restProps }) => (
  <Field name={name} validate={validate} fast={fast}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Checkbox
        name={name}
        checked={value}
        onChange={(event) => {
          setFieldValue(name, event.target.checked);
          setFieldTouched(name, true, false);
        }}
        {...restProps}
      />
    )}
  </Field>
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
