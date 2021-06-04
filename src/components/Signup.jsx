import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Navbar from './Navbar'
import CoolButton from './CoolButton'
import FormField from './FormField'

export class Signup extends Component {
    render() {
        return (
            <>
              <Navbar/>
              <div className="auth__form">
                < FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                < FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                < FormField label="Password" type="password" placeholder="*******" />
                < CoolButton isRounded isSmall isSuccess isMedium>Submit</CoolButton>
             </div>
            </>
        )
    }
}

export default Signup
