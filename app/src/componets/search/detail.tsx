import { Grid, Box, Typography, Stack, TextField, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import Schlagwoerter from '../create/schlagwoerter';
import Buch from './buch.json';
import art from '../create/art';
import rating from '../create/rating';
import schlagwoerter from '../create/schlagwoerter';

export function Detail() {
  return (
    <Grid
      rowSpacing={1}
      columnSpacing={6}
      container
      my={2}
      alignContent={'center'}
    >
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h4" component="h1" gutterBottom>
              {Buch.titel.titel}
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h4" component="h1" gutterBottom>
              {Buch.titel.untertitel}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h5" component="h1" gutterBottom>
              {Buch.abbildungen[0].beschriftung}
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              {Buch.abbildungen[0].contentType}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h5" component="h1" gutterBottom>
              ISBN
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              {Buch.isbn}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h5" component="h1" gutterBottom>
              ID:
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              {Buch.id}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h5" component="h1" gutterBottom>
              Rating:
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              {Buch.rating}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={'row'} spacing={2}>
          <Box p={0}>
            <Typography variant="h5" component="h1" gutterBottom>
              Art:
            </Typography>
          </Box>
          <Box p={0}>
            <Typography variant="h6" component="h1" gutterBottom>
              {Buch.art}
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Detail;
