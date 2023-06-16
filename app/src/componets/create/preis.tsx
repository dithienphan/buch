import { TextField } from '@mui/material';

function Preis() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="Preis"
      label="Preis"
      variant="outlined"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*.[0-9]*' }} 
    />
  );
}

export default Preis;
