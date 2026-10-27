import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPassword.css';

export default function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify-code');
  };

  return (
    <div className="reset-container">
      <Link to="/signin" className="back-circle-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="reset-content glass-effect">
        <div className="logo-area">
          <img src="/ifarm-logo.png" alt="iFarm Logo" className="reset-logo" />
        </div>

        <h2>Reset Your Password</h2>
        <p className="subtitle">Enter your Email to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" required />
          </div>

          <button type="submit" className="submit-btn">Continue </button>
        </form>
      </div>
    </div>
  );
}