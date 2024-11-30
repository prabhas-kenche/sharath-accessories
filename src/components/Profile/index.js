import React, { useEffect, useState } from 'react';
import { auth } from "../../firebaseConfig"; // Import Firebase auth
import Header from '../Header';
import GoogleLogin from '../GoogleLogin';
import OTPLogin from '../OTPLogin';
import { TbDeviceMobileCheck } from "react-icons/tb";
import './index.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showGoogleLogin, setShowGoogleLogin] = useState(true); // Toggle between login methods
  const [showOTPLogin, setShowOTPLogin] = useState(false); // Control OTPLogin visibility
  const [hideOr, setHideOr] = useState(false); // Toggle OR separator visibility

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleGoogleClick = () => {
    setShowGoogleLogin(true);
    setShowOTPLogin(false);
    setHideOr(true);
  };

  const handleOTPClick = () => {
    setShowGoogleLogin(false);
    setShowOTPLogin(true);
    setHideOr(true);
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-header text-center">
          <h1>My Profile</h1>
          <p>HOME/<span>MY PROFILE</span></p>
        </div>

        {user ? (
          <div className="profile-options">
            <h3>Manage Your Profile</h3>
            <ul>
              <li><a href="/profile/edit">Profile Edit</a></li>
              <li><a href="/wishlist">Wishlist / Favorites</a></li>
              <li><a href="/rewards">Rewards & Loyalty Points</a></li>
              <li><a href="/saved-addresses">Saved Addresses</a></li>
              <li><a href="/payment-methods">Payment Methods</a></li>
              <li><a href="/notifications">Notifications</a></li>
              <li><a href="/recently-viewed">Recently Viewed Items</a></li>
              <li><a href="/subscriptions">Subscriptions & Memberships</a></li>
              <li><a href="/order-tracking">Order Tracking</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
              <li><a href="/help-support">Help & Support</a></li>
              <li><a href="/sign-out">Sign Out</a></li>
              <li><a href="/privacy-security">Privacy & Security</a></li>
              <li><a href="/preferences">Language & Currency Preferences</a></li>
              <li><a href="/gift-cards">Gift Cards & Vouchers</a></li>
              <li><a href="/refer-earn">Refer & Earn</a></li>
              <li><a href="/feedback-reviews">Feedback & Reviews</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/announcements">Announcements & Updates</a></li>
            </ul>
          </div>
        ) : (
          <div className="login-container">
            <p>You need to be logged in to access your profile.</p>
            <div className="login-options">
              <h3>Login to access your profile</h3>

              {/* Google and OTP login toggle buttons */}
              <div className="login-buttons d-flex flex-column justify-content-center mb-5">
                {showGoogleLogin ? (
                  <>
                    <GoogleLogin />
                    {!hideOr && (
                      <div className="login-separator">
                        <hr /><span className="or-text">OR</span><hr />
                      </div>
                    )}
                    <button className='mobile-button' onClick={handleOTPClick}><TbDeviceMobileCheck className='mobile-logo' /> Sign in with Mobile</button>
                  </>
                ) : (
                  <>
                    {!hideOr && (
                      <div className="login-separator">
                        <hr /><span className="or-text">OR</span><hr />
                      </div>
                    )}
                    {showOTPLogin && (
                      <div className="otp-login-slide">
                        <OTPLogin />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <div className="footer-note">
        Copyright © 2024 Swapna Self Drive Cars. All Rights Reserved.
        Powered by <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Vspaze Technologies</a>
      </div>
    </div>
  );
};

export default Profile;
