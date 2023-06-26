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
    <input value={BuchContext.titel}>
    <TextField
      style={{
        display: 'flex',
        boxSizing: 'border-box',
        margin: '5px',
      }}
      type="text"
      label="Titel"
      variant="outlined"
      onChange={handleTitel}
    />
    </input>
  );
}

export default Titel;
