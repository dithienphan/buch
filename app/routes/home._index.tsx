import type { V2_MetaFunction } from "@remix-run/node";
import homeStyles from '~/styles/home.css';
import { Navbar } from '~/components/navbar'


export const meta: V2_MetaFunction = () => {
    return [
      { title: "Homepage" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };

  export default function Home() {
    return (
    <body>
      <Navbar/>
      <h1>Homepage</h1>
      <main>
        <h1>Inhalt</h1>
      </main>
    </body>
    );
  }

export function links() {
   return [{ rel: 'stylesheet', href: homeStyles }];
}