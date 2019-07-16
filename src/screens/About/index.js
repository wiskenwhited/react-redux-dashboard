import React, { Component } from 'react'
import Gallery from '../../components/Gallery'
import BottomCard from '../../components/BottomCard'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import ImageTitleComponent from '../../components/ImageTitleComponent'
import TitleComponent from '../../components/TitleComponent';
import './index.css'
import '../index.css'
import {
    Label,
} from 'reactstrap'
import HeadQuarterImage from '../../assets/images/about/headquarter.png'
import NextArrow from '../../assets/images/about/arrow-next.png'
import PreviousArrow from '../../assets/images/about/arrow-previous.png'
import UBISoftLogo from '../../assets/images/ubisoft-logo.png'
import NGameLogo from '../../assets/images/ngame-logo.png'
import MaiseLogo from '../../assets/images/maise-logo.png'
class About extends Component {
    reduceTeamIndex = () => {
        const { reduceTeamIndex } = this.props
        reduceTeamIndex()
    }
    increaseTeamIndex = () => {
        const { increaseTeamIndex } = this.props
        increaseTeamIndex()
    }
    render () {
        const {labels, content, base, teamIndex } = this.props
        return (
            <div className="about-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.aboutTitle}</Label>
                </div>
                <Support3Text index={labels.refinedIndex} title={labels.refinedTitle} description={content.gamingRefined} download={false}/>
                <ImageTitleComponent  label={content.gamingRefined.content4} image={HeadQuarterImage} reverse={false}/>
                <div className="meet-team-container">
                    <div className="meet-team-content">
                        <div className="left-team-content">
                            <div className="team-member-card">
                                <Gallery uid="1" teamIndex={teamIndex}/>
                            </div>
                            <div className="team-arrow">
                                <img src={PreviousArrow} onClick={this.reduceTeamIndex}/> 
                                <img src={NextArrow} onClick={this.increaseTeamIndex}/>
                            </div>
                        </div>
                        <div className="right-team-content">
                            <TitleComponent  index={labels.meetIndex} title={labels.meetTitle}/>
                            <BottomCard index={labels.joinTeamIndex} link={labels.joinTeamLink} investor={false}/>
                        </div>
                    </div>
                </div>
                <div className="mission-container">
                    <Support3Text index={labels.missionIndex} title={labels.missionTitle} description={content.ourMission} />
                </div>
                <div className="help-company-container">
                    <div className="help-company-content">
                        <TitleComponent  index={labels.helpusIndex} title={labels.helpusTitle}/>
                        <div className="image-card-container" >
                            <img src={UBISoftLogo} />
                            <img src={MaiseLogo} />
                            <img src={NGameLogo} />
                            <BottomCard index={labels.investorIndex} link={labels.investorLink} investor={true}/>
                        </div>
                    </div>
                </div>
                <JoinCompetition joinContents={content.joinContents} base={base}/>
            </div>
        )
    }
}

export default About