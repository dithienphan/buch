import NavStyles from '~/styles/navbar.css';

export function Navbar () {
    return (
      <body>
        <nav>
          
          <div>
            <ul id="navbar">
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
      </body>
    );
}

export function links() {
  return [{ rel: 'stylesheet', href: NavStyles }];
}