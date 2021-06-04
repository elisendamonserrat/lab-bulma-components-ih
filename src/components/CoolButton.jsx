import React, { Component } from 'react'
import 'bulma/css/bulma.css'

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
