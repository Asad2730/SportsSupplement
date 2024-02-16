import { useState } from "react";

export const useField = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text) => {
    setValue(text);
  };

  const reset = () => {
    setValue(initialValue);
  };

  const increment = () => {
    setValue((preValue) => preValue + 1);
  };
  const decrement = () => {
    if (value > 1) {
      setValue((preValue) => preValue - 1);
    }
  };

  const handleNumericChange = (number) => {
    const num = parseInt(number);
    if (!isNaN(num) && num >= 1) {
      setValue(num);
    }
  };
  return {
    value,
    onChangeText,
    reset,
    increment,
    decrement,
    handleNumericChange
  };
};
