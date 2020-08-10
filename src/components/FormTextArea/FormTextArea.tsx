import * as React from 'react';
import { FieldProps } from 'formik';
import { FormTextArea as $FormTextArea, FormTextAreaProps as $FormTextAreaProps } from '@twilio-paste/core';

import { FormikFieldProps } from '../../interfaces';
import { Field } from '../Field';

export type FormTextAreaProps = FormikFieldProps & Omit<$FormTextAreaProps, 'value'>;

export const FormTextArea = React.forwardRef(
  (
    { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: FormTextAreaProps,
    ref: React.Ref<typeof $FormTextArea>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { onChange, onBlur } }: FieldProps) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <$FormTextArea
          {...restProps}
          ref={(ref as unknown) as React.RefObject<HTMLTextAreaElement>}
          name={name}
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

FormTextArea.displayName = 'FormTextArea';

export default FormTextArea;
