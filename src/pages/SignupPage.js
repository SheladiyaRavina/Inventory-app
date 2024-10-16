import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find((user) => user.username === username);
    
    if (existingUser) {
      setError('Username is already taken.');
    } else {

      const newUser = { username, password, role };
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
    
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-violet-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-950">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Password"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full p-2 bg-violet-500 text-white rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{' '}
          <a href="/" className="text-violet-500">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
