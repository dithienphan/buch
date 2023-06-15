import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

export const DynamicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Art</TableCell>
            <TableCell>Preis</TableCell>
            <TableCell>Rabatt</TableCell>
            <TableCell>Lieferbar</TableCell>
            <TableCell>Datum</TableCell>
            <TableCell>Homepage</TableCell>
            <TableCell>Schlagwörter</TableCell>
            <TableCell>Titel</TableCell>
            <TableCell>Untertitel</TableCell>
            <TableCell>Beschriftung</TableCell>
            <TableCell>ContentType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
            <TableCell>{row.isbn}</TableCell>
            <TableCell>{row.rating}</TableCell>
            <TableCell>{row.art}</TableCell>
            <TableCell>{row.preis}</TableCell>
            <TableCell>{row.rabatt}</TableCell>
            <TableCell>{row.lieferbar}</TableCell>
            <TableCell>{row.datum}</TableCell>
            <TableCell>{row.homepage}</TableCell>
            <TableCell>{row.schlagwoerter}</TableCell>
            <TableCell>{row.titel.titel}</TableCell>
            <TableCell>{row.titel.untertitel}</TableCell>
            <TableCell>{row.abbildungen[0].beschriftung}</TableCell>
            <TableCell>{row.abbildungen[0].contentType}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 2,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 3,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
  {
    id: 4,
    isbn: '978-0-007-00644-1',
    rating: 1,
    art: 'KINDLE',
    preis: 99.99,
    rabatt: 0.123,
    lieferbar: true,
    datum: '2022-01-31',
    homepage: 'https://post.rest',
    schlagwoerter: ['JAVASCRIPT', 'TYPESCRIPT'],
    titel: {
      titel: 'Titelpost',
      untertitel: 'untertitelpost',
    },
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },
    ],
  },
];
