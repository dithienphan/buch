import homeStyles from '~/styles/index.css';

export default function HomeCreate() {
  return (
    <body>
      <main>
        <h2>Create</h2>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
