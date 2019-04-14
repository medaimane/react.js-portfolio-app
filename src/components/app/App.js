import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../layouts/Header/Header';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

class App extends Component {
  state = {
    posts: []
  };

  render() {
    return (
      <Router>
        <section className="hero is-white is-fullheight">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <Header />
          </div>

          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <Route
                exact
                path="/"
                render={props => (
                  <div>
                    <h1 className="title is-1">Mohamed Aimane S.</h1>
                    <h2 className="subtitle is-4">
                      Full Stack, Mobile Web Engineer
                    </h2>
                  </div>
                )}
              />
              <Route
                exact
                path="/about"
                render={props => (
                  <div className="container">
                    <About />
                  </div>
                )}
              />
              <Route
                exact
                path="/contact"
                render={props => (
                  <div className="container">
                    <Contact />
                  </div>
                )}
              />
            </div>
          </div>

          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <footer className="container">
              <div className="level">
                <div className="level-item has-text-centered">
                  <p className="heading is-5">
                    Made with{' '}
                    <span className="icon">
                      <i className="fas fa-heart" />
                    </span>{' '}
                    by{' '}
                    <a href="#!">
                      <strong>MEDAIMANE</strong>
                    </a>{' '}
                    © 2019
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
