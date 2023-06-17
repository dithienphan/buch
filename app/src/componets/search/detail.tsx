import { Grid, Typography } from '@mui/material';
import Buch from './buch.json';

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
        <Typography variant="h3" component="h1" gutterBottom>
          {Buch.titel.titel}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          {Buch.titel.untertitel}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          ID:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.id}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          ISBN:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.isbn}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Rating:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.rating}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Art:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.art}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Lieferbar:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.lieferbar.toString()}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Datum:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.datum}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Homepage:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.homepage}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Schlagwörter:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.schlagwoerter.toString()}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Preis:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.preis}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Rabatt:
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.rabatt}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          Abbildungen:
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.abbildungen[0].beschriftung}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h5" component="h1" gutterBottom>
          {Buch.abbildungen[0].contentType}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Detail;
