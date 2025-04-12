import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success shadow">
      <div className="container">
        {}
        <Link className="navbar-brand text-white fw-bold" to="/">
          🌿 Organic Mart
        </Link>

        {}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/form">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/displayPage">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
