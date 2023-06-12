import * as React from 'react';
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  RadioGroup,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const art = [
  {
    value: 'KINDLE',
    label: 'Kindle',
  },
  {
    value: 'DRUCKAUSGABE',
    label: 'Druckausgabe',
  },
];

const schlagwoerter = [
  {
    value: 'JAVASCRIPT',
    label: 'Javascript',
  },
  {
    value: 'TYPESCRIPT',
    label: 'Typescript',
  },
];

const rating = [1, 2, 3, 4, 5];

export default function Create() {
  const [rating, setRating] = React.useState('');
  const [art, setArt] = React.useState('');
  const [schlagwoerter, setSchlagwoerter] = React.useState('');

  const handleChangeRating = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };
  const handleChangeArt = (event: SelectChangeEvent) => {
    setArt(event.target.value as string);
  };
  const handleChangeSchlagwoerter = (event: SelectChangeEvent) => {
    setSchlagwoerter(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Neues Buch Anlegen
        </Typography>
        <form>
          <Grid>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              id="ISBN"
              label="ISBN"
              type="text"
              variant="outlined"
            />
            <FormControl
              variant="outlined"
              sx={{ width: '400px', margin: '5px' }}
            >
              <InputLabel id="Age">Age</InputLabel>
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
          </Grid>
          <Grid>
            <FormControl
              variant="outlined"
              sx={{ width: '400px', margin: '5px' }}
            >
              <InputLabel id="Art">Art</InputLabel>
              <Select
                id="Art"
                label="Art"
                value={art}
                onChange={handleChangeArt}
              >
                <MenuItem value={'KINDLE'}>Kindle</MenuItem>
                <MenuItem value={'DRUCKAUSGABE'}>Druckausgabe</MenuItem>
              </Select>
            </FormControl>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="number"
              label="Preis"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="number"
              label="Rabatt"
              variant="outlined"
            />
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="bool"
              label="Lieferbar"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="text"
              label="Datum"
              variant="outlined"
            />
            <FormControl
              variant="outlined"
              sx={{ width: '400px', margin: '5px' }}
            >
              <InputLabel id="schlagwoerter">Schlagwoerter</InputLabel>
              <Select
                id="Schlagwoerter"
                label="Schlagwoerter"
                value={schlagwoerter}
                onChange={handleChangeSchlagwoerter}
              >
                <MenuItem value={'JAVASCRIPT'}>Javascript</MenuItem>
                <MenuItem value={'TYPESCRIPT'}>Typescript</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid margin={'5px'}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Javascript"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Typescript"
            />
          </Grid>

          <Grid>
            <Typography variant="h6" component="h2" margin="5px" gutterBottom>
              Titel
            </Typography>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="text"
              label="Titel"
              variant="outlined"
            />
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="text"
              label="Untertitel"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <Typography variant="h6" component="h2" margin="5px" gutterBottom>
              Abbildung
            </Typography>
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="text"
              label="Beschriftung"
              variant="outlined"
            />
            <TextField
              style={{ width: '400px', margin: '5px' }}
              type="text"
              label="ContentType"
              variant="outlined"
            />
          </Grid>
          <Button variant="contained" color="primary">
            save
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
}
