import NavStyles from '~/styles/navbarStyles.css';

export function Navbar () {
    return (
      <>
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
      </>
    );
}

export function links() {
  return [{ rel: 'stylesheet', href: NavStyles }];
}