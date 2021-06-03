import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './FormFields.css'


export default class FormField extends Component {
    render() {
        return (
          <div className='field'>
            <label className='label'>{this.props.label}</label>
            <div class="control">
                <input class="input is-normal" type={this.props.type} placeholder={this.props.placeholder} />
             </div>
          </div>
        )
    }
}

