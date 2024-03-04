import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link
          to={'/'}
          className='fs-3 text-center rm-title my-3 text-success navbar-brand'
        >
          Rick and Morty <span className='text-dark'>Wiki</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                to={'/'}
                className='nav-link'
                aria-current='page'
              >
                Characters
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                to={'/episodes'}
                className='nav-link'
              >
                Episodes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                to={'/locations'}
                className='nav-link'
              >
                Locations
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
