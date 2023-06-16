import { TextField } from '@mui/material';

function Untertitel() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="Untertitel"
      label="Untertitel"
      variant="outlined"
    />
  );
}

export default Untertitel;
