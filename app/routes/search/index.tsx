import * as React from 'react';
import {
  Typography,
  Drawer,
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
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const [rating, setRating] = React.useState('');
  const [art, setArt] = React.useState('');
  const [schlagwoerter, setSchlagwoerter] = React.useState('');
  const [drawer, setDrawer] = React.useState(true);

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
      <div>
        <IconButton
          onClick={() => setDrawer(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)}>
        <Grid
          rowSpacing={0}
          columnSpacing={0}
          container
          my={0}
          alignContent={'center'}
        >
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                id="ISBN"
                label="ISBN"
                type="text"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <FormControl
                variant="outlined"
                sx={{ display: 'flex', boxSizing: 'border-box', margin: '1px' }}
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
          <Grid item xs={4}>
            <Box p={0}>
              <FormControl
                variant="outlined"
                sx={{ display: 'flex', boxSizing: 'border-box', margin: '1px' }}
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
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="number"
                label="Preis"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="number"
                label="Rabatt"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="bool"
                label="Lieferbar"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="text"
                label="Datum"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <FormControl
                variant="outlined"
                sx={{ display: 'flex', boxSizing: 'border-box', margin: '1px' }}
              >
                <InputLabel id="schlagwoerter">Schlagwörter</InputLabel>
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
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box p={0}>
              <FormControlLabel
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                control={<Checkbox defaultChecked />}
                label="Javascript"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box p={0}>
              <FormControlLabel
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                control={<Checkbox defaultChecked />}
                label="Typescript"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="text"
                label="Titel"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="text"
                label="Untertitel"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="text"
                label="Beschriftung"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={0}>
              <TextField
                style={{
                  display: 'flex',
                  boxSizing: 'border-box',
                  margin: '1px',
                }}
                type="text"
                label="ContentType"
                variant="outlined"
              />
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
      </Drawer>
    </React.Fragment>
  );
}
