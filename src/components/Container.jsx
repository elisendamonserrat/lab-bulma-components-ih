import React, { Component } from 'react'
import Message from './Message'
import 'bulma/css/bulma.css'


export default class Container extends Component {
    render() {
        return (
            <div className="column is-half is-offset-one-quarter">
                <Message isInfo title='Hello World'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
                </Message>
            </div>
        )
    }
}

