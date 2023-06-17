import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

function Rating() {
  const [rating, setRating] = React.useState('');
  const handleChangeRating = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{ display: 'flex', boxSizing: 'border-box', margin: '5px' }}
    >
      <InputLabel id="Rating">Rating</InputLabel>
      <Select
        id="Rating"
        label="Rating"
        value={rating}
        onChange={handleChangeRating}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Rating;
