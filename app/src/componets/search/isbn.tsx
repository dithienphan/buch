import { TextField } from '@mui/material';
import { useState } from 'react';

function Isbn() {
  // const [tfValue, setTFValue] = useState("My Text");

  console.log("Hello World");

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, extra: string) => {
    if (event.target.value === 'a') {
      console.log(extra);
    }
    console.log(event.target.value);
    console.log(extra);
  }

  // function handleIsbn(event: React.ChangeEvent<HTMLInputElement>) {
  //   setIsbnField((complete) => {
  //     if (complete) {
  //       return false;
  //     }
  //     return complete;
  //   });
  // }

  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      id="Isbn"
      label="Isbn"
      name = "IsbnField"
      type="text"
      variant="outlined"
      onChange={(event) => handleTextFieldChange(event, 'extra prop')}
/>
  );
}

export default Isbn;
