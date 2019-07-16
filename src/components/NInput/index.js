import React, { Component } from 'react'
import './index.css'
import {
    Input,
    Label,
} from 'reactstrap'
class NInput extends Component {
    render () {
        const { placeholder } = this.props
        return (
            <div className="ninput-container">
                <Input placeholder={placeholder}/>
            </div>
        )
    }
}

export default NInput