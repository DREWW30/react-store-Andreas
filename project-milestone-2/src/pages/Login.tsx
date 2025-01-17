import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react";
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login dengan:", { email, password });
    // Tambahkan logika autentikasi di sini
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-emerald-300">
      <div className="w-full max-w-md rounded-lg bg-emerald-100 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => {
              navigate('/');
          }}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun? <a href="/register" className="text-blue-500 hover:underline"  onClick={() => {
                    navigate('/register');
                }}>Daftar</a>
        </p> <br />

        <button onClick={() => {
                    navigate('/');
                }} className='bg-white hover:bg-black hover:text-white'>Back To Home</button>

      </div>
    </div>
  );
};

export default Login;
