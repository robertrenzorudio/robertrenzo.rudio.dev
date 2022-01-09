import { Form, Formik } from 'formik';
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

interface Props {}

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
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col w-11/12 self-center bg-blue-50 dark:bg-nightowl-200 p-8 border rounded-md border-blue-200 space-y-6">
          <h2 className="text-md font-medium text-gray-800 dark:text-gray-200 ">
            You can also send me an email here.
          </h2>
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
              <TextArea
                id="message"
                label="Message"
                name="message"
                rows={6}
                placeholder="Hey there 👋"
              />
            </div>
          </div>
          <button className="p-2 bg-transparent border border-rose-500 text-rose-500 text-md rounded-md hover:bg-rose-500/20 flex-1 self-end">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
