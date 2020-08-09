import { Field as FormikField, FastField } from 'formik';
import * as React from 'react';

import { FormikFieldProps } from '../../interfaces';

export const Field: React.FC<FormikFieldProps> = ({ fast, children, ...restProps }) => {
  if (fast) {
    return <FastField {...restProps}>{children}</FastField>;
  }

  return <FormikField {...restProps}>{children}</FormikField>;
};

Field.displayName = 'Field';

export default Field;
