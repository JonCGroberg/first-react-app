const NavBar = () => {
  return (
    <div className="navbar shadow navbar-expand pb-0">
      <div className="container-fluid justify-content-center ">
        <ul className="navbar-nav  nav-underline ">
          <li className="nav-item h5 m-0">
            <a href="#" className="nav-link text-white active pb-3">Todos</a>
          </li>
          <li className="nav-item h5  m-0">
            <a href="#" className="nav-link text-white pb-3">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
