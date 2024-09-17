// Login.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { FolderBase } from '../../FAKEAPI/fakeDatabase'; // Import the fake database

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Username and Password are required.');
      return;
    }

    const user = FolderBase.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate('/Dashboard'); // Redirect to /dashboard on successful login
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };
 
  return (
    <div className=" xxs:w-[90%] sm:w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleLogin} className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div>
          <label htmlFor="username" className="block mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
