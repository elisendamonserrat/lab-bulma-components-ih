import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default class CoolButton extends Component {
    render() {
        const buttonStyles = `
        button ${this.props.isSmall ? 'is-small' : ''} ${this.props.isDanger ? 'is-danger' : ''} ${this.props.isSuccess ? 'is-success' : ''}
        ${this.props.isRounded ? 'is-rounded' : ''} ${this.props.isMedium ? 'is-medium' : ''}`
        
        return (
            <button className={buttonStyles}>
               {this.props.children}
             </button>
        )
    }
}
