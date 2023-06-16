import { TextField } from '@mui/material';

function Titel() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="Titel"
      label="Titel"
      variant="outlined"
    />
  );
}

export default Titel;
