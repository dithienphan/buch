import { TextField } from '@mui/material';

function Preis() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="number"
      label="Preis"
      variant="outlined"
    />
  );
}

export default Preis;
