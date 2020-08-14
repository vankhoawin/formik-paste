[Storybook](https://vnguyen94.github.io/formik-paste) | [CHANGELOG](https://github.com/vnguyen94/formik-paste/releases) | [npm](https://www.npmjs.com/package/formik-paste)

# formik-paste

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9176f69724e4126bfc1c661883a4570)](https://app.codacy.com/manual/vnguyen/formik-paste?utm_source=github.com&utm_medium=referral&utm_content=vnguyen94/formik-paste&utm_campaign=Badge_Grade_Dashboard)
[![Known Vulnerabilities](https://snyk.io/test/github/vnguyen94/formik-paste/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vnguyen94/formik-paste?targetFile=package.json)

Super-charged [Paste](https://paste.twilio.design) components using [Formik](https://github.com/jaredpalmer/Formik) to handle form state.

This library lightly wraps Paste components with a required `name: string` prop that connects them to a Formik form field. Simply change form component imports from `@twilio-paste/core` to `formik-paste`, and set their `name` prop. Doing so will link the Paste component with a `Formik` field under the hood!

## Getting started

```bash
npm install formik-paste
```

## Usage:

```tsx
import { Button, FormLabel, FormHelpText } from '@twilio-paste/core';
import { Theme } from '@twilio-paste/theme';
import { Formik } from 'formik';
import { FormInput } from 'formik-paste';
import * as React from 'react';

function App() {
  return (
    <Theme.Provider theme="default">
      <Formik
        initialValues={{ emailAddress: '' }}
        onSubmit={(values) => {
          window.alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
            <FormInput id="emailAddress" name="emailAddress" type="email" placeholder="example@twilio.com" />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Theme.Provider>
  );
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

Heavily inspired by [formik-antd](https://github.com/jannikbuschke/formik-antd/).

## License

[MIT](https://choosealicense.com/licenses/mit/)
