import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Activation.css'; 

export default function Activation() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/signin'); 
  };

  return (
    <div className="activation-container">
      <div className="left-side">
        <img src="/ifarm-logo.png" alt="iFarm Logo" className="logo" />
        <p className="slogan">Cultivating<br />a brighter tomorrow</p>
      </div>

      <div className="right-side">
        <div className="form-wrapper">
          <h2>Activate your account.</h2>
          <p className="subtitle">Create your account to get started.</p>

          <form onSubmit={handleSubmit}>
            
            <div className="form-card">
              <div className="input-group">
                <label>Username</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input type="text" placeholder="username" required />
                </div>
              </div>

              <div className="input-group">
                <label>Email</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input type="email" placeholder="daniel@example.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input type="password" placeholder="Enter your password" required />
                </div>
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input type="password" placeholder="Confirm your password" required />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">Activate Account </button>
            
            <div className="signin-btn-container">
              <p className="signin-text">Already Activated?</p>
              <Link to="/signin" className="signin-btn-outline">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}