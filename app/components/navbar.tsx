import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
} from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Buch
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' href='http://localhost:3000/home'>Home</Button>
          <Button color='inherit' href='http://localhost:3000/home/create'>Create</Button>
          <Button color='inherit' href='http://localhost:3000/home/search'>Search</Button>
          <Button color='inherit' href='http://localhost:3000/login'>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}