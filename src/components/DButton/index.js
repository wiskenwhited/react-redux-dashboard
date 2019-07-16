import React, { Component } from 'react'
import './index.css'
import {
    Label,
} from 'reactstrap'
const style = {
    backgroundColor: '#FFC400',
}
const style1 = {
    color: '#000000'
}
class DButton extends Component {
    onClick = () => {

    }
    render () {
        const { title, image, active } = this.props
        return (
            <div className="dbutton-container" style={active && style} onClick={this.onClick}>
                <Label style={active && style1}>{title}</Label>
                <img src={image} alt="Image" />
            </div>
        )
    }
}

export default DButton