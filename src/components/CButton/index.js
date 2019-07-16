import React, { Component } from 'react'
import './index.css'
import {
    Label,
    NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
class CButton extends Component {
   
    render () {
        const { title, target, base } = this.props
        console.log("#########", target)
        return (
            <div className="cbutton-container">
                <NavLink href={`${base}/${target}`}>{title}</NavLink>
            </div>
        )
    }
}

export default CButton