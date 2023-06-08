import { Outlet } from '@remix-run/react';
import homeStyles from '~/styles/index.css';
import { Navbar } from '~/components/navbar';

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <h1>Home</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
