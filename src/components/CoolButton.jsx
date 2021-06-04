import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import clsx from 'clsx';

export default class CoolButton extends Component {
    render() {
        return (
          <p className="control">
             <a href="#" className="button is-info">
               {this.props.name}
             </a>
          </p>
        )
    }
}
