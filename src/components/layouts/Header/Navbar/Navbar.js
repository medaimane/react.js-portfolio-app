import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks';

class Navbar extends Component {
  state = {
    socialLinks: [
      {
        name: 'GitHub',
        to: '#!',
        icon: 'github',
        color: 'is-white'
      },
      {
        name: 'Twitter',
        to: '#!',
        icon: 'twitter',
        color: 'is-info'
      },
      {
        name: 'LinkedIn',
        to: '#!',
        icon: 'linkedin',
        color: 'is-link'
      },
      {
        name: 'DEV',
        to: '#!',
        icon: 'dev',
        color: 'is-dark'
      }
    ]
  };

  render() {
    return (
      <nav className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href>
            <h1>MEDAIMANE</h1>
          </a>
          <a
            href="#!"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <span className="navbar-item">
              <span className="buttons are-small">
                <SocialLinks socialLinks={this.state.socialLinks} />
              </span>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
