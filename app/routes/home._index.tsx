import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import homeStyles from '~/styles/home.css';
import { Navbar } from '~/components/navbar'


export const meta: V2_MetaFunction = () => {
    return [
      { title: "Homepage" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

  export default function Home() {
    return (
    <div><Navbar/>
      <main>
        <h1>Homepage</h1>
        <IconButton component={Link} to="/">
        <ArrowBackIosIcon />
        </IconButton>
        <p id="cta">
          <Link to="/">back</Link>
        </p>
      </main>
    </div>
    );
  }

export function links() {
   return [{ rel: 'stylesheet', href: homeStyles }];
}