import * as React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

export default function Login() {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <Grid
        rowSpacing={1}
        columnSpacing={6}
        container
        my={0}
        alignContent={'center'}
      >
        <Grid item xs={12}>
          <Box p={0}>
            <Typography variant="h4" component="h1" gutterBottom>
              Login: {count}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '1px',
              }}
              id="Benutzername"
              label="Benutzername"
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
                margin: '1px',
              }}
              id="Passwort"
              label="Passwort"
              type="text"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              Anmelden
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
