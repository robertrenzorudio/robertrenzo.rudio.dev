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
      <div className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full md:px-0 space-y-3 p-4 px-8">
        <h1 className="text-3xl font-extrabold">Contact</h1>
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
          {({ isSubmitting }) => (
            <Form className="flex flex-col w-11/12 self-center bg-blue-50 dark:bg-nightowl-200 p-8 border rounded-md border-blue-200 space-y-6">
              <p className="text-sm md:text-lg font-medium text-gray-800 dark:text-gray-200 break-words">
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
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <Input
                    id="email"
                    label="Email"
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
                    id="message"
                    label="Message"
                    name="message"
                    rows={6}
                    placeholder="Hey there 👋"
                  />
                </div>
              </div>

              <div className="flex w-16 h-10 self-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border w-full h-full p-2 bg-gray-100 dark:bg-nightowl-100 text-md rounded-m rounded-md"
                >
                  <span hidden={isSubmitting}>Send</span>
                  <div
                    className={`loading flex space-x-1 self-center ${
                      isSubmitting ? '' : 'hidden'
                    }`}
                  >
                    <div className="w-3 h-3 bg-gray-600/70 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-gray-600/70 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-gray-600/70 rounded-full animate-bounce"></div>
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
