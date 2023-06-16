import { TextField } from '@mui/material';
import { useState } from 'react';

function ISBN() {
  let [IsbnField, setIsbnField] = useState("");
  console.log("Re-Rendered");

  function handleIsbn(event: React.ChangeEvent<HTMLInputElement>) {
    setIsbnField((complete) => {
      if (complete) {
        return false;
      }
      return complete;
    });
  }

  return (
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
      onChange={handleIsbn}
    />
  );
}

export default ISBN;
