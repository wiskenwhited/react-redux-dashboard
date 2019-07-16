import React, { Component } from 'react'
import JoinCompetition from '../../components/JoinCompetition'
import './index.css'
import '../index.css'
import {
    Label,

} from 'reactstrap'
import GymImage from '../../assets/images/help/gym.png'
import Ellipse from '../../assets/images/help/ellipse.png'

class Help extends Component {
    renderBottomText = ( contents ) => {
        return contents.map( 
            (item, index) => {
                return (
                    <div key={index} className="text-content-e">
                        <img src={Ellipse} alt="Check Box"/>
                        <p className="text-paragraph">{item}</p>
                    </div>
                )
            }
        )
    }
    renderItem = ( contents ) => {
        return contents.map(
            (item, index) => {
                return (
                    <p key={index} className="text-paragraph">{item}</p>
                )
            }
        )
    }
    render () {
        const { labels, content, base } = this.props
        
        return (
            <div className="help-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.basicTitle}</Label>
                </div>
                <div className="text-content-h">
                    <h3 className="text-mid-paragraph">{content.basicPage.content1}</h3>
                    {this.renderItem(content.basicPage.content)}
                </div>
                <div className="text-content-m">
                    <div>
                        <Label className="text-mid-title">{labels.basicTitle2}</Label>
                    </div>
                    <div>
                    {this.renderItem(content.basicPage.mcontent)}
                    </div>
                </div>
                <div className="text-content-h">
                {this.renderItem(content.basicPage.econtent)}
                </div>
                <div className="image-content-h">
                    <img src={GymImage} alt="Image"/>
                </div>
                <div className="text-content-h">
                {this.renderItem(content.basicPage.ucontent)}
                </div>
                { this.renderBottomText(content.basicPage.lcontent) }
                <JoinCompetition joinContents={content.joinContents} base={base}/>
            </div>
        )
    }
}

export default Help