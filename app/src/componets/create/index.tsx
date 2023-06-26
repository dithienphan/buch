import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import Titel from './titel';
import Untertitel from './untertitel';
import Beschriftung from './beschriftung';
import ContentType from './contentType';
import Lieferbar from './lieferbar';
import Art from './art';
import Datum from './datum';
import ISBN from './isbn';
import Preis from './preis';
import Rabatt from './rabatt';
import Schlagwoerter from './schlagwoerter';
import React, { useContext } from 'react';
import { BuchContext } from './createContext';


function Create() {
  const buchContext = useContext(BuchContext)
  return (
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
          <Titel></Titel>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Untertitel></Untertitel>
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
          <Beschriftung></Beschriftung>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <ContentType></ContentType>
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
          <ISBN></ISBN>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Datum></Datum>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Preis></Preis>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Rabatt></Rabatt>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Rating></Rating>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box p={0}>
          <Art></Art>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box p={0}>
          <Lieferbar></Lieferbar>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box p={0}>
          <Schlagwoerter></Schlagwoerter>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={0}>
          <Button variant="contained" color="primary">
            save
          </Button>
        </Box>
      </Grid>
      <div>User name is {buchContext.buch?.titel}</div>
      <div>User email is {buchContext.buch?.untertitel}</div>
    </Grid>
  );
}

export default Create;
