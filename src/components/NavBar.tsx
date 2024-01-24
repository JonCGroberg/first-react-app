const NavBar = () => {
  return (
  <div className="navbar shadow-lg navbar-expand pb-0 bg-secondary-subtle">
      <div className="container-fluid px-5 justify-content-center nav-fill">
        <ul className="navbar-nav nav-underline gap-0 w-100">
          <li className="nav-item h5 m-0 nav-fill w-100">
            <a href="#" className="nav-link text-white active pb-3  w-100">Todos</a>
          </li>
          <li className="nav-item h5 m-0 w-100">
            <a href="#" className="nav-link text-white pb-3 w-100">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
