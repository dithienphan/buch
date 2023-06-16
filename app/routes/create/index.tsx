import type { ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import * as React from 'react';
import Create from '~/src/componets/create';

export default function ViewCreate() {
  return (
    <React.Fragment>
      <Create></Create>
    </React.Fragment>
  );
}

function validateIsbn(isbn: string) {
  if (isbn.length < 9) {
    return `The name is too short`;
  }
}
