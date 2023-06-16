import { TextField } from '@mui/material';

function ContentType() {
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="ContentType"
      label="ContentType"
      variant="outlined"
    />
  );
}

export default ContentType;
