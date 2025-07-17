'use client';
import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();

    const onLogin = () =>{
      router.push('/ad_route');
    }

    
    const validEmail = 'admin@example.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      onLogin();         
    } 

  };

  return (
    <div className='login'>
    <div className="login-modal">
      <h2>Admin Login</h2>
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
