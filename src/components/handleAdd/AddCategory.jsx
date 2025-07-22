import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ textLabel, textPlaceHolder, onNewValue }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim()
    if (value <= 1) return;

    onNewValue(value)
    setinputValue('');
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div>
        <label
          htmlFor={textLabel}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {textLabel}
        </label>
        <input
          type="text"
          id={textLabel}
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={textPlaceHolder}
          required
          onChange={onInputChange}
          value={inputValue}
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  textLabel: PropTypes.string.isRequired,
  textPlaceHolder: PropTypes.string,
  onNewValue: PropTypes.any,
};
