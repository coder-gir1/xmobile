import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogIn = () => {
    setError('');

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email);

    if (!user) {
      setError('No account found with this email.');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password.');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to welcome page
    router.push('/welcome');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Head>
        <title>Log In - Xmobile</title>
      </Head>
      <div className="w-full max-w-md space-y-5">
        <div className="text-center">
          <img
            src="/xmobile_logo.png"
            alt="Xmobile Logo"
            className="mx-auto mb-15 w-50 h-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-800 font-bold">Log In</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="Text your email"
              className="w-full border-1 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="Text your password"
              className="w-full border-1 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            onClick={handleLogIn}
            className="w-full bg-black text-white rounded-lg py-2 font-medium"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
