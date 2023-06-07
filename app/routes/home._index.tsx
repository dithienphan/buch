import type { V2_MetaFunction } from "@remix-run/node";
import homeStyles from '~/styles/home.css';
import { Navbar } from '~/components/navbar'
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "@remix-run/react";


export const meta: V2_MetaFunction = () => {
    return [
      { title: "Homepage" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

  export default function Home() {
    return (
    <body>
      <Navbar/>
      <h1>Homepage</h1>
      <main>
        <IconButton id="icon1" style={{scale: "10%"}} component={Link} to="/">
          <ArrowBackIosIcon style={{scale: "10%"}}/>
        </IconButton>
        <h1>Inhalt</h1>
      </main>
    </body>
    );
  }

export function links() {
   return [{ rel: 'stylesheet', href: homeStyles }];
}