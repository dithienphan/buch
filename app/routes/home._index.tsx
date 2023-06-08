import homeStyles from '~/styles/index.css';

export default function HomeDefaut() {
  return (
    <body>
      <main>
        <h2>Default</h2>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
