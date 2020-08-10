import { Button, FormHelpText, FormLabel, Text, Grid, Column, Heading, Card } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import * as React from 'react';

import { Checkbox, FormInput, FormTextArea, Option, Radio, RadioGroup, Select } from '../components';

export default {
  title: 'Full Form',
};

export const FullForm: React.FC = () => (
  <Theme.Provider theme="default">
    <Formik
      initialValues={{
        emailAddress: '',
        positiveNumber: '',
        message: '',
        checkbox: false,
        campaign: 'ongoing',
        callbackMethod: 'get',
      }}
      onSubmit={(values) => {
        window.alert(JSON.stringify(values));
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};
        const positiveNumber = Number(values.positiveNumber);

        if (isNaN(positiveNumber)) {
          errors.positiveNumber = 'Input is not a number';
        } else if (positiveNumber < 0) {
          errors.positiveNumber = 'Number is not positive';
        }

        return errors;
      }}
    >
      {(formikProps) => {
        const { errors, handleSubmit, values } = formikProps;

        return (
          <Grid gutter="space30">
            <Column span={8}>
              <Heading as="h4" variant="heading40">
                formik-paste Form Demo
              </Heading>
              <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
                <FormInput id="emailAddress" name="emailAddress" type="email" placeholder="example@twilio.com" />

                <FormLabel htmlFor="positiveNumber">Positive Number</FormLabel>

                <FormInput
                  aria-describedby="positiveNumberErrorHelpText"
                  id="positiveNumber"
                  name="positiveNumber"
                  type="text"
                  placeholder="example@twilio.com"
                />

                {errors.positiveNumber && (
                  <FormHelpText id="positiveNumberErrorHelpText" variant="error">
                    {errors.positiveNumber}
                  </FormHelpText>
                )}

                <FormLabel htmlFor="message" required={true}>
                  Message (at least 40 characters)
                </FormLabel>
                <FormTextArea id="message" name="message" placeholder="Enter message" />
                <Text as="p">{values.message.length} characters</Text>

                <Checkbox id="checkbox" name="checkbox">
                  Checkbox
                </Checkbox>

                <RadioGroup id="campaign" name="campaign" legend="When should your campaign run?">
                  <Radio id="ongoing" value="ongoing" name="campaign">
                    Run my ads as ongoing
                  </Radio>
                  <Radio id="enddate" value="enddate" name="campaign">
                    Set a start and end date
                  </Radio>
                </RadioGroup>

                <FormLabel htmlFor="callbackMethod">Callback Method</FormLabel>
                <Select required id="callbackMethokd" name="callbackMethod">
                  <Option value="get">GET</Option>
                  <Option value="post">POST</Option>
                  <Option value="put">PUT</Option>
                </Select>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Column>
            <Column span={4}>
              <Card padding="space70">
                <Heading as="h4" variant="heading40">
                  Formik Payload
                </Heading>
                <Text as="pre" overflow="auto">
                  {JSON.stringify(formikProps, null, 4)}
                </Text>
              </Card>
            </Column>
          </Grid>
        );
      }}
    </Formik>
  </Theme.Provider>
);
