import { Form, Formik } from 'formik';
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import * as Yup from 'yup';
import { userData } from '../constants';

interface Props {}

const EmailSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  subject: Yup.string().max(100, 'Too Long!'),
  message: Yup.string().required('Required!'),
});

const Contact = (props: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto w-full px-6 md:px-12 lg:px-0 lg:max-w-3xl 2xl:max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-indigo-300">
          Contact
        </h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={EmailSchema}
          onSubmit={async (values, actions) => {
            try {
              const res = await fetch('/api/sendemail', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              const reset = res.ok;
              const data = await res.json();
              actions.setSubmitting(false);

              if (reset) {
                actions.resetForm();
              }
              alert(data.message);
            } catch (err) {
              alert(
                'An error occured while sending the email. Please send an email directly or try again later.'
              );
              actions.setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="flex flex-col w-full self-center p-6 md:p-8 mt-6 border-2 border-orange-600 dark:border-indigo-300 space-y-6">
              <p className="text-lg font-medium text-blue-1100 dark:text-indigo-100 break-words">
                Best way to reach me is by sending an email @{' '}
                <a
                  className="font-bold underline underline-offset-2"
                  href={`mailto:${userData.email}`}
                >
                  {userData.email}
                </a>
                &nbsp;or you can write one here.
              </p>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 md:col-span-3">
                  <Input
                    required
                    id="name"
                    label="Name *"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <Input
                    required
                    id="email"
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="john@doe.tld"
                  />
                </div>

                <div className="col-span-6">
                  <Input
                    id="subject"
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Hello"
                  />
                </div>

                <div className="col-span-6">
                  <TextArea
                    required
                    id="message"
                    label="Message *"
                    name="message"
                    rows={6}
                    placeholder="Hey there 👋"
                  />
                </div>
              </div>

              <div className="flex w-full h-12 ">
                <button
                  type="submit"
                  disabled={!(isValid && dirty)}
                  className="border-2 border-indigo-700 dark:border-orange-150 w-full h-full p-2 "
                >
                  <span
                    hidden={isSubmitting}
                    className="text-indigo-700 dark:text-orange-150 text-lg font-bold"
                  >
                    Send
                  </span>
                  <div
                    className={`loading flex space-x-1 justify-center ${
                      isSubmitting ? '' : 'hidden'
                    }`}
                  >
                    <div className="w-3 h-3 bg-indigo-700/50 dark:bg-orange-150/50 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-indigo-700/50 dark:bg-orange-150/50 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-indigo-700/50 dark:bg-orange-150/50 rounded-full animate-bounce"></div>
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
