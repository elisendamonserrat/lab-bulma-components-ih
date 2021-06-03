import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar $navbar-background-color is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                          <div className="field is-grouped">
                              <p className="control">
                                <a href="#" className="button is-info">
                                  Login
                                </a>
                              </p>
                              <p class="control">
                                <a href="#" class="button is-primary">
                                 Signup
                                </a>
                              </p>
                          </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
