import  { useState } from 'react';

export const useField = (initialValue) =>{
    const [value,setValue] = useState(initialValue);

    const onChangeText = (text) => {
        setValue(text);
    }

    const reset = () => {
        setValue(initialValue);
    }
    
    return {
        value,
        onChangeText,
        reset,
    };

}