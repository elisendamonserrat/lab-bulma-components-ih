import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import CoolButton from './CoolButton'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
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
                                 <CoolButton name="Login"/>
                              </p>
                              <p class="control">
                                 <CoolButton name="Signup"/>
                              </p>
                          </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
