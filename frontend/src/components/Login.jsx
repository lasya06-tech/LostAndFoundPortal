import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();  //what login returns is stored in data

      if (response.ok) {

  alert("Login Successful!");

  localStorage.setItem(
    "token",
    data.token
  );

  localStorage.setItem(
    "userName",
    data.user.name
  );

  navigate("/");
} else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">
          <h1>Welcome Back</h1>

          <p>
            Sign in to manage your lost and found items,
            track reports, and connect with the community.
          </p>

          <div className="login-feature">
            🔍 Search Lost Items
          </div>

          <div className="login-feature">
            🤝 Connect With Owners
          </div>

          <div className="login-feature">
            📦 Track Your Reports
          </div>
        </div>

        <div className="login-right">

          <div className="login-card">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>

                <span>Forgot Password?</span>
              </div>

              <button type="submit" className="login-btn-main">
                Login
              </button>

            </form>

            <p className="register-text">
              Don't have an account?
              <span>
                <Link to="/register">
                  Register
                </Link>
              </span>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;