import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

function Lieferbar() {
  return (
    <FormControl>
      <FormLabel id="Lieferbar">Lieferbar</FormLabel>
      <RadioGroup aria-labelledby="lieferbar" name="lieferbar">
        <FormControlLabel value="true" control={<Radio />} label="Ja" />
        <FormControlLabel value="false" control={<Radio />} label="Nein" />
      </RadioGroup>
    </FormControl>
  );
}

export default Lieferbar;
