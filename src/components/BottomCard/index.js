import React, { Component } from 'react'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'

class BottomCard extends Component {
    render () {
        const { index, link, investor, explore } = this.props
        return (
            <div className={explore? "explore bottom-card-container" : "bottom-card-container"} style={investor? {backgroundColor: '#171717'} : {backgroundColor: '#FFC400'}}>
               <h3 className="text-mid-title" style={investor? {color: '#FFFFFF'} : {color: '#000000'}}>{index}</h3>
               <h3 className="text-mid-paragraph" style={investor? {color: '#FFFFFF'} : {color: '#000000'}}>{link}</h3>
               <div className="line" style={investor? {backgroundColor: '#FFC400'} : {backgroundColor: '#FFFFFF'}}/>
            </div>
        )
    }
}

export default BottomCard