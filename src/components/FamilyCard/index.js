import React, { Component} from 'react'
import './index.css'

class FamilyCard extends Component {
    render () {
        const {position, name, avatar } = this.props
        return (
            <div className="family-card-container">
                <img src={avatar}/>
                <div className="card-text-container">
                    <h3>{position}</h3>
                    <p>{name}</p>
                </div>
            </div>
        )
    }
}

export default FamilyCard