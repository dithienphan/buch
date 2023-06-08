import { Outlet } from '@remix-run/react';
import homeStyles from '~/styles/index.css';
import { Navbar } from '~/components/navbar';

export default function Home() {
  return (
    <body>
      <nav>
        <Navbar />
      </nav>
      <h1>Home</h1>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
