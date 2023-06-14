import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import * as React from 'react';
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Grid,
  Box,
  FormControlLabel,
  Rating,
  RadioGroup,
  Radio,
  FormLabel,
  FormGroup,
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
      <Grid
        rowSpacing={1}
        columnSpacing={6}
        container
        my={2}
        alignContent={'center'}
      >
        <Grid item xs={12}>
          <Box p={0}>
            <Typography variant="h4" component="h1" gutterBottom>
              Neues Buch Anlegen
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Typography variant="h6" component="h2" margin="5px" gutterBottom>
              Titel
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="text"
              label="Titel"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="text"
              label="Untertitel"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Typography variant="h6" component="h2" margin="5px" gutterBottom>
              Abbildung
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
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
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="text"
              label="ContentType"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              Weiteres
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              id="ISBN"
              label="ISBN"
              type="text"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="text"
              label="Datum"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="number"
              label="Preis"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '5px',
              }}
              type="number"
              label="Rabatt"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
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
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <FormControl
              variant="outlined"
              sx={{ display: 'flex', boxSizing: 'border-box', margin: '5px' }}
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
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box p={0}>
            <FormControl>
              <FormLabel id="Lieferbar">Lieferbar</FormLabel>
              <RadioGroup aria-labelledby="lieferbar" name="lieferbar">
                <FormControlLabel value="true" control={<Radio />} label="Ja" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Nein"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box p={0}>
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
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Button variant="contained" color="primary">
              save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function validateIsbn(isbn: string) {
  if (isbn.length < 9) {
    return `The name is too short`;
  }
}
