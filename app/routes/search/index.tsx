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
        <Grid item xs={6}>
          <Box p={0}>
            <TextField
              style={{
                display: 'flex',
                boxSizing: 'border-box',
                margin: '1px',
              }}
              id="ID"
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
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText 
                  primary="List item 1" 
                  secondary="Secondary text"/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="List item 2"
                  secondary="Secondary text"
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
