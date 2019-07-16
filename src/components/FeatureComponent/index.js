import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class FeatureComponent extends Component {
    render () {
        const { image, label, content} = this.props
        return (
            <div className="feature-component">
                <div className="feature-imagearea">
                    <img src={image} alt="Image"/>
                </div>
                <div className="feature-textarea">
                    <h3 className="text-mid-paragraph">{label}</h3>
                    <p className="text-paragraph">{content}</p>
                </div>
            </div>
        )
    }
}

export default FeatureComponent