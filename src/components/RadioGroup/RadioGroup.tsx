import * as React from 'react';
import { FieldProps } from 'formik';
import { RadioGroup as $RadioGroup, RadioGroupProps as $RadioGroupProps } from '@twilio-paste/core';

import { FormikFieldProps } from '../../interfaces';
import { Field } from '../Field';

export type RadioGroupProps = FormikFieldProps &
  Omit<$RadioGroupProps, 'value' | 'onChange'> &
  Partial<Pick<$RadioGroupProps, 'onChange'>>;

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, validate, fast, onChange, ...restProps }) => {
  return (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
        <$RadioGroup
          name={name}
          onChange={(newValue) => {
            setFieldValue(name, newValue);
            setFieldTouched(name, true, false);
            onChange?.(newValue);
          }}
          {...restProps}
          value={value}
        />
      )}
    </Field>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
