import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const user = storedUsers.find(
      (user) => user.username === username && user.password === password && user.role === role
    );

    if (user) {
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/products');
      }
    } else {
      
      setError('Invalid username, password, or role.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-violet-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-950">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-violet-500">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
