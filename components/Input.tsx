import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  type: string;
};

const Input = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label
        className="block text-sm font-medium text-gray-800 dark:text-gray-100"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="shadow-sm focus:ring-rose-500 focus:border-rose-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md bg-gray-100 dark:bg-nightowl-100"
        {...field}
        {...props}
      />
    </>
  );
};

export default Input;
