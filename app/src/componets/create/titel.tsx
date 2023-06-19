import { TextField } from '@mui/material';
import { useContext } from 'react';
import { BuchContext } from './createContext';

function Titel() {
  const buchContext = useContext(BuchContext)
  const handleTitel = () => {
    // if (userContext) {
    buchContext.setBuch({ ...buchContext, 
      titel: 'T',
      untertitel: 'U'
    }) 
  }
  return (
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      id="Titel"
      label="Titel"
      variant="outlined"
      onChange={handleTitel}
    />
  );
}

export default Titel;
