import { TextField } from '@mui/material';

function Rabatt() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="number"
      id="Rabatt"
      label="Rabatt"
      variant="outlined"
    />
  );
}

export default Rabatt;
