import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
function RegisterComponent(props) {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const result = await register(username, password, confirmPassword);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleRegister}
        className="card rounded p-4 p-3
        "
        style={{
          width: '400px',
        }}
      >
        <h3>Register</h3>
        <div className="form-group text-left mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="username.1"
            className="form-control mb-3"
            id="usernameid"
            aria-describedby="UserHelp"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group text-left mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterComponent;
