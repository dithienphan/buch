import * as React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import type { MetaFunction } from '@remix-run/node';

export default function Login() {
  const [count, setCount] = React.useState(0);



async function getCharacters() {
  const fetch = require('node-fetch');
  const https = require('https');

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });
    let results = await fetch('https://localhost:3000/graphql', {
      method: 'POST',
  
      headers: {
        "Content-Type": "application/json"
      },
      agent: httpsAgent,
      body: JSON.stringify({
        query: `{
          buch {
            results {
              titel {
                titel
              }
            }
          }
        }`
      })
    })
    let characters = await results.json();
    console.log(characters.data)
  }
  
  getCharacters()

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
