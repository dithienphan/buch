import * as React from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { DynamicTable } from '../../src/componets/search/table';
import Isbn from '~/src/componets/search/isbn';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import type { ActionFunction } from '@remix-run/node';
import Search from '~/src/componets/search';

export const action: ActionFunction = async ({ request }) => {
  const formPayload = Object.fromEntries(await request.formData());

  const subscriberSchema = z.object({
    Isbn: z.string(),
    Id: z.number(),
  });
};

export default function ViewSearch() {
  return (
    <React.Fragment>
      <Search></Search>
    </React.Fragment>
  );
}
