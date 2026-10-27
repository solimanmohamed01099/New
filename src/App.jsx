import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Activation from './pages/Activation';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import './App.css';
import VerifyCode from './pages/VerifyCode';
import NewPassword from './pages/NewPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/" element={<Navigate to="/activation" />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;