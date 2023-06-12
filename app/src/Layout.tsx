import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import { NavBar } from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{ my: 4, alignItems: 'stretch' }}>
          {children}
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
