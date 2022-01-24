import React from 'react'
import { AuthProvider } from '../context/AuthProvider';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Profile from './Profile';
import { Login } from './Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
