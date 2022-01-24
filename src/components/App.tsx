import React from 'react'
import { AuthProvider } from '../context/AuthProvider';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Profile from './Profile';
import { Login } from './Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login " />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
