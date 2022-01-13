import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  type: string;
};

const Input = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;

  return (
    <>
      <label
        className="block text-sm font-medium text-blue-1100 dark:text-indigo-100"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className={`shadow-sm ${
          error && 'focus:ring-rose-500 focus:border-rose-500 focus'
        } mt-1 block w-full sm:text-sm bg-gray-200 dark:bg-nightowl-200`}
        {...field}
        {...props}
      />
      {error && (
        <p className="block mt-1 text-sm font-medium text-rose-500">
          {meta.error}
        </p>
      )}
    </>
  );
};

export default Input;
