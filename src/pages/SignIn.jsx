import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully (Demo)");
  };

  return (
    <div className="signin-container">
      <div className="left-side">
        <img src="/ifarm-logo.png" alt="iFarm Logo" className="logo" />
        <p className="slogan">Cultivating<br />a brighter tomorrow</p>
      </div>

      <div className="right-side">
        <div className="form-wrapper">
         <Link to="/activation" className="back-btn">
           <span className="back-icon">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
         </span>
        </Link>
          <h2>Welcome back.</h2>
          <p className="subtitle">Sign in to your iFarm account.</p>

          <form onSubmit={handleSubmit}>
            
            <div className="form-card">
              <div className="input-group">
                <label>Email</label>
                <div className="input-wrapper">
                  <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input type="email" placeholder="Enter your email address" required />
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

              <div className="forgot-password-container">
                <Link to="/reset-password" className="forgot-password">Forgot password?</Link>
              </div>
            </div>

            <button type="submit" className="submit-btn">Sign In </button>
          </form>
          
         <div className="signup-action-container">
         <p className="signup-text">Don't have an account?</p>
          <Link to="/activation" className="signup-btn-outline">Activate now</Link>
         </div>
        </div>
      </div>
    </div>
  );
}