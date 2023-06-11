import { Outlet } from '@remix-run/react';
import { Navbar } from '~/components/navbar';

export default function Home() {
  return (
    <body>
      <h1>Home</h1>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </body>
  );
}
