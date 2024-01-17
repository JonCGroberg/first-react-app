const NavBar = () => {
  return (
    <div className="navbar shadow navbar-expand">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav  nav-underline">
          <li className="nav-item ">
            <a href="#" className="nav-link text-white active">Todos</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white ">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
