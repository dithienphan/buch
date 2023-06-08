import homeStyles from '~/styles/index.css';

export default function HomeSearch() {
  return (
    <body>
      <main>
        <h2>Search</h2>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
