import { TextField } from '@mui/material';

function ISBN() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      label="ISBN"
      type="text"
      variant="outlined"
    />
  );
}

export default ISBN;
