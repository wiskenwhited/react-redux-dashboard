import React, { Component } from 'react'
import './index.css'

class TitleComponent extends Component {
    render () {
        const { index, title} = this.props
        return (
            <div className="title-container">
                <p>{index}</p>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default TitleComponent