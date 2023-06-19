import { TextField } from '@mui/material';
import { useState } from 'react';

function Isbn() {
  // const [tfValue, setTFValue] = useState("My Text");

  console.log('Hello World');

  const isbnValidate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(event.target.value);
    if (event.target.value.length < 3) {
      console.log('Brudi viel zu kurz');
    }
  };

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
      id="ISBN"
      label="ISBN"
      name="IsbnField"
      type="text"
      variant="outlined"
      onChange={(event) => isbnValidate(event)}
    />
  );
}

export default Isbn;
