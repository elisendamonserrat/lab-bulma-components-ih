import React, { Component } from 'react'
import 'bulma/css/bulma.css'


export default class Message extends Component {

    render() {
        const isInfo = this.props.isInfo ? 'is-info' : 'is-dark';
        return (
            <div className={`message ${isInfo}`}>
                <div className="message-header">
                    <p>{this.props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {this.props.children}
                </div>
            </div>

        )
    }
}