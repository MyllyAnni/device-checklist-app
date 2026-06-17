import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>

      <div className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="anna@example.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
          />
        </div>

        <button>Login</button>

        <Link to="/">
          <button>Takaisin</button>
        </Link>

      </div>
    </div>
  );
}