import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Navbar } from '../components/navbar';
import Home from './home';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Home />
          {children}
        </Box>
      </Container>
    </div>
  );
}
