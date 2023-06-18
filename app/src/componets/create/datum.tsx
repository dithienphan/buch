import { TextField } from '@mui/material';

function Datum() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="date"
      variant="outlined"
    />
  );
}

export default Datum;
