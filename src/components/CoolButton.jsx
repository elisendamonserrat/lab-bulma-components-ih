import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import clsx from 'clsx';

export default class CoolButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonStyles = `
        button
        ${this.props.isSmall ? 'is-small' : ''}
        ${this.props.isDanger ? 'is-danger' : ''}
        ${this.props.isSuccess ? 'is-success' : ''}
        ${this.props.isRounded ? 'is-rounded' : ''}
        `
        return (
            <button className={buttonStyles}
            >
               {this.props.children}
             </button>
        )
    }
}
