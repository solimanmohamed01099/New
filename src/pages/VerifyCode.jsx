import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './VerifyCode.css';

export default function VerifyCode() {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/new-password');
  };

  return (
    <div className="verify-container">
      <Link to="/reset-password" className="back-circle-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="verify-content glass-effect">
        <div className="logo-area">
          <img src="/ifarm-logo.png" alt="iFarm Logo" className="verify-logo" />
        </div>

        <h2>Verify your Account</h2>
        <p className="subtitle">
          We've sent a verification code to an******1@gmail.com.<br />
          Please check your inbox and enter the code below to verify your email address.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Verification Code *</label>
            <div className="code-inputs">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  placeholder=" "
                  required
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <button type="submit" className="submit-btn">Verify Email </button>
        </form>

        <p className="resend-text">
          Didn't get a code? <a href="#" className="resend-link">Resend Code</a>
        </p>
      </div>
    </div>
  );
}