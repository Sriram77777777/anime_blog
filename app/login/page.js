'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ onLogin, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const onLogin = ()=>{
        router.push('/login_route')

    }
    
    const validEmail = 'user@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      onLogin();         
    } else {
      setError('Invalid email or password!');
    }
  };

  return (
    <div className='login'>
    <div className="login-modal">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        
      </form>
    </div>
    </div>
  );
}
