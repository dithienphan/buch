import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
import homeStyles from '~/styles/home.css';

export function Navbar () {
    return (
        <div>
            <h1>Navigationssleiste</h1>
        <nav>
            <a href="/">
            <h1>Back</h1>
            </a>
        </nav>
        </div>
        
    )
}