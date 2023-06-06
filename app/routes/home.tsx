import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Icon, IconButton } from "@mui/material";


export const meta: V2_MetaFunction = () => {
    return [
      { title: "Homepage" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

  export default function home() {
    return (
    <main>
      <h1>homepage</h1>
      <IconButton component={Link} to="/">
      <ArrowBackIosIcon />
      </IconButton>
    </main>
    );
  }
