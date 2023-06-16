import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React from 'react';

function Art() {
  const [art, setArt] = React.useState('');
  const handleChangeArt = (event: SelectChangeEvent) => {
    setArt(event.target.value as string);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{ display: 'flex', boxSizing: 'border-box', margin: '5px' }}
    >
      <InputLabel id="Art">Art</InputLabel>
      <Select id="Art" label="Art" value={art} onChange={handleChangeArt}>
        <MenuItem value={'KINDLE'}>Kindle</MenuItem>
        <MenuItem value={'DRUCKAUSGABE'}>Druckausgabe</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Art;
