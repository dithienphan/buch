import { Link } from '@remix-run/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import NavStyles from '~/styles/navbar.css';

export function Navbar () {
    return (
      <body>
        <nav>
          <IconButton id="icon1" style={{scale: "10%"}} component={Link} to="/">
            <ArrowBackIosIcon style={{scale: "10%"}}/>
          </IconButton>
          <div>
            <ul id="navbar">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home/search">Search</a>
              </li>
              <li>
                <a href="/home/create">Create</a>
              </li>
            </ul>
          </div>
        </nav>
      </body>
    );
}

export function links() {
  return [{ rel: 'stylesheet', href: NavStyles }];
}