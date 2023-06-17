import * as React from 'react';
import DynamicTable from './table';
import Searchbar from './searchbar';
import { Grid, Typography } from '@mui/material';

export default function Search() {
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
          <Searchbar></Searchbar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1" gutterBottom>
            Ergebnis
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DynamicTable></DynamicTable>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
