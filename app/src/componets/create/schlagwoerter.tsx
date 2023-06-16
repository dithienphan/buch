import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from '@mui/material';

function Schlagwoerter() {
  return (
    <>
      <FormLabel component="legend">Schlagwörter</FormLabel>
      <FormGroup>
        <FormControlLabel
          sx={{ display: 'flex', boxSizing: 'border-box' }}
          control={<Checkbox defaultChecked />}
          label="Javascript"
        />
        <FormControlLabel
          sx={{ display: 'flex', boxSizing: 'border-box' }}
          control={<Checkbox defaultChecked />}
          label="Typescript"
        />
      </FormGroup>
    </>
  );
}

export default Schlagwoerter;
