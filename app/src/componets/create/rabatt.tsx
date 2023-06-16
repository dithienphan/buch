import { TextField } from '@mui/material';

function Rabatt() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="Rabatt"
      label="Rabatt"
      variant="outlined"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*.[0-9]*' }} 
    />
  );
}

export default Rabatt;
