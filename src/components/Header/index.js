import { Link, useLocation } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import './index.css';

const Header = ({ searchInput, changeSearchInput, enterSearchInput }) => {
  const location = useLocation(); // Get the current route

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value);
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile navigation icons */}
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
            <Link to="/ordershistory" className="nav-link">
              <FaClipboardList className={`nav-bar-img ${
                  location.pathname === '/cart' ? 'active-icon' : ''
                }`}/>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/favourites" className="nav-link">
              <MdOutlineFavorite className={`nav-bar-img ${
                  location.pathname === '/cart' ? 'active-icon' : ''
                }`}/>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className={`nav-bar-img ${
                  location.pathname === '/' ? 'active-icon' : ''
                }`}
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className={`nav-bar-img ${
                  location.pathname === '/cart' ? 'active-icon' : ''
                }`}
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <CgProfile className={`nav-bar-img ${
                  location.pathname === '/cart' ? 'active-icon' : ''
                }`}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
