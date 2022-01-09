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
  subject: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
  message: Yup.string().required('Required!'),
});

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full md:px-0 space-y-3 p-4 px-8">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={EmailSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
        }}
      >
        {() => (
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
                  placeholder="I like Linear Algebra"
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
            <button className="p-2 bg-transparent border border-rose-500 text-rose-500 text-md rounded-md hover:bg-rose-500/20 flex-1 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 self-end">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
