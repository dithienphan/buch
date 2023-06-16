import { TextField } from '@mui/material';

function Datum() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      label="Datum"
      variant="outlined"
    />
  );
}

export default Datum;
