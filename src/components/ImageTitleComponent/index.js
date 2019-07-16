import React, { Component } from 'react'
import './index.css'
import '../../screens/index.css'

class ImageTitleComponent extends Component {
    renderComponent = () => {
        const { label, content1, content2, image, reverse} = this.props
        if (!reverse ) {
            return (
                <div className="image-title-container">
                    <div className="image-content">
                        <img src={image} alt="Tournament" />
                    </div>
                    <div className="title-content">
                        <h1 className="text-mid-title">{label}</h1>
                        <p className="text-paragraph">{content1}</p>
                        <p className="text-paragraph">{content2}</p>
                    </div>
                </div>)
        } else {
            return (
                <div className="image-title-container reverse">
                    <div className="title-content">
                        <h1 className="text-mid-title">{label}</h1>
                        <p className="text-paragraph">{content1}</p>
                        <p className="text-paragraph">{content2}</p>
                    </div>
                    <div className="image-content">
                        <img src={image} alt="Tournament" />
                    </div>
                </div>)
        }
    }
    render () {
        return (
            <div>
                {this.renderComponent()}
            </div>
        )
    }
}

export default ImageTitleComponent