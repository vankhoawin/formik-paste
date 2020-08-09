import { FieldValidator } from 'formik';

export interface FormikFieldProps {
  name: string;
  validate?: FieldValidator;
  fast?: boolean;
}
