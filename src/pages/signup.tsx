import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    setError('');

    if (!fullName || !phone || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((user: any) => user.email === email)) {
      setError('Email is already registered.');
      return;
    }

    const newUser = { fullName, phone, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    router.push('/welcome');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Head>
        <title>Sign Up - Xmobile</title>
      </Head>
      <div className="w-full max-w-md space-y-5">
        <div className="text-center">
            <img
            src="/xmobile_logo.png"
            alt="Xmobile Logo"
            className="mx-auto mb-15 w-50 h-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-800 font-bold">Sign Up</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Text your fullname"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 mb-1">Phone</label>
            <input
              type="text"
              placeholder="Text your phone number"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="Text your email"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-black 
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
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Text your password again"
              className="w-full border-2 border-gray-400 rounded-lg px-4 py-2 text-black 
             placeholder:font-normal placeholder-gray-400 placeholder:text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            onClick={handleSignUp}
            className="w-full bg-black text-white rounded-lg py-2 font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
