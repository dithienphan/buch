import type { V2_MetaFunction } from '@remix-run/node';
import homeStyles from '~/styles/index.css';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Homepage' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Home() {
  return (
    <body>
      <h1>Homepage</h1>
      <main>
        <nav id="navbar">
          <div>
            <ul id="items">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home/search">Search</a>
              </li>
              <li>
                <a href="/home/create">Create</a>
              </li>
            </ul>
          </div>
        </nav>
        <h2>Homepage</h2>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
