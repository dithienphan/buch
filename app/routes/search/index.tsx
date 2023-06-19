import * as React from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { DynamicTable } from '../../src/componets/search/table';
import  Isbn  from '~/src/componets/search/isbn';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import type {ActionFunction} from '@remix-run/node'

export const action: ActionFunction = async ({request}) => {
  
  const formPayload = Object.fromEntries(await request.formData())
  
  const subscriberSchema = z.object({
    Isbn: z.string(),
    Id: z.number(),
  })
}

export default function Search() {
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
              Buch Suchen
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={0}>
            <Isbn></Isbn>
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
              id="Id"
              label="ID"
              type="text"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={0}>
            <Button variant="contained" color="primary">
              Suche
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid
        rowSpacing={1}
        columnSpacing={6}
        container
        my={0}
        alignContent={'center'}
      >
        <Grid item xs={12}>
          <Box>
            <DynamicTable />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
