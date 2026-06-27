import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const userName = localStorage.getItem("userName");
  const token=localStorage.getItem("token");
  return (
    <nav className="navbar">

      <div className="logo">
        Find<span>It</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lost-items">Lost Items</Link></li>
        <li><Link to="/found-items">Found Items</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-actions">

  {token ? (
    <div className="profile-circle">
      {userName.charAt(0).toUpperCase()}
    </div>
  ) : (
    <>
      <Link to="/login" className="login-btn">
        Login
      </Link>

      <Link to="/register" className="register-btn">
        Register
      </Link>
    </>
  )}

</div>

    </nav>
  );
}

export default Nav;