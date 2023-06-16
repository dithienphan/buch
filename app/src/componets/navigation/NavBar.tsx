import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" lang="de-DE">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Buch
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="http://localhost:3000">
            Home
          </Button>
          <Button color="inherit" href="http://localhost:3000/create">
            Anlegen
          </Button>
          <Button color="inherit" href="http://localhost:3000/search">
            Suche
          </Button>
          <Button color="inherit" href="http://localhost:3000/login">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
