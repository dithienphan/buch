import { TextField } from '@mui/material';
import { useState } from 'react';

function ISBN() {
  const [tfValue, setTFValue] = useState("My Text");

  console.log("Hello World");

  // function handleIsbn(event: React.ChangeEvent<HTMLInputElement>) {
  //   setIsbnField((complete) => {
  //     if (complete) {
  //       return false;
  //     }
  //     return complete;
  //   });
  // }

  return (
    <div>
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      id="Isbn"
      placeholder="ISBN"
      name = "IsbnField"
      type="text"
      variant="outlined"
    />
    <TextField
 onChange={(newValue) => setTFValue(newValue.target.value)} />
 </div>
  );
}

export default ISBN;
