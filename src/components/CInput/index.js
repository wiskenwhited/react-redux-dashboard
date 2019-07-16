import React, { Component } from 'react'
import './index.css'
import {
    Input,
    Label,
} from 'reactstrap'

class CInput extends Component {
    
    render () {
        const { label, placeholder } = this.props
        return (
            <div className="cinput-container">
                <Input placeholder={placeholder} />
                <Label>{label}</Label>                
            </div>
        )
    }
}

export default CInput