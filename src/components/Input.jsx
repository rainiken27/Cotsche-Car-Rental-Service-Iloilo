import React from "react";


const Input = ({ onChange, value, title, name, color }) => {
  return (
    <div class="flex items-center">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label

        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
  );
};

export default Input;
