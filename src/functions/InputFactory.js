import {useState} from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = text => setValue(text);

  return {value, onChangeText: handleChange};
}

export default function inputFactory(inputs) {
  return inputs.map(input => {
    const valueAndAction = useFormInput('');

    return {
      ...input,
      ...valueAndAction,
    };
  });
}
