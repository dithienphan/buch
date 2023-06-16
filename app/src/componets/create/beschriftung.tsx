import { TextField } from '@mui/material';

function Beschriftung() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      label="Beschriftung"
      variant="outlined"
    />
  );
}

export default Beschriftung;
