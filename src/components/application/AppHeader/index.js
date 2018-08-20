import React, {Component} from 'react';
import '../../../styles/app-header.scss';
import '../../../styles/content.scss';
import logoImage from '../../../assets/app/app-header/logo.png'
import searchIcon from '../../../assets/app/app-header/search.png'
import notifyIcon from '../../../assets/app/app-header/notifications.png'
import chatIcon from '../../../assets/app/app-header/chat.png'
import userImage from '../../../assets/app/app-header/user.png'

class AppHeader extends Component {
    render () {
        return (
          <header className="app-header">
            <nav className="row content d-flex">
              <div className="col-2">
                {/* Logo */}
                <a className="app-header__logo">
                  <img src={logoImage} alt="logo" />
                </a>
              </div>
              <div className="col-7 d-flex justify-content-start">
                {/* Search */}
                <div className="app-header__search d-flex align-self-end">
                  <button className="app-header__search-button">
                    <img src={searchIcon} alt="search"/>
                  </button>
                  <input 
                    className="app-header__search-input font-regular"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                {/* Buttons */}
                <button className="app-header__button">
                  <img src={chatIcon} alt="btn"/>
                </button>
                <button className="app-header__button">
                  <img src={notifyIcon} alt="btn"/>
                </button>
              </div>
              <div className="col-3 d-flex">
                {/* User */}
                <a className="app-header__user d-flex align-items-center">
                  <img 
                    className="app-header__user-image" 
                    src={userImage} 
                    alt="img"/>
                  <span className="app-header__user-name font-regular">
                    Maximillian Beekeeper
                  </span>
                </a>
              </div>
            </nav>
          </header>
        );
    }
}

export default AppHeader;
