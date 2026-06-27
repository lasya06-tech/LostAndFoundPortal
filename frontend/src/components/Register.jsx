import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
function Register() {
   const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${API}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");

        setUser({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-left">
          <h1>Join FindIt</h1>

          <p>
            Create your account and help reunite people with
            their lost belongings.
          </p>

          <div className="feature">🔍 Search Lost & Found Items</div>
          <div className="feature">📦 Report Lost Items Easily</div>
          <div className="feature">🤝 Connect With Item Owners</div>
        </div>

        <div className="register-right">
          <div className="register-card">

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>

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
                  placeholder="Create password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="register-btn-main">
                Create Account
              </button>

            </form>

            <p className="login-text">
              Already have an account?
              <span> Login</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;