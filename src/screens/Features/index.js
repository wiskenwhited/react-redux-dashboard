import React , { Component } from 'react'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import ImageTitleComponent from '../../components/ImageTitleComponent'
import './index.css'
import '../index.css'
import {
    Label,
} from 'reactstrap'
import TournamentImage from '../../assets/images/features/tournament.png'
import RealMoneyImage from '../../assets/images/features/real-money.png'
import ProtectionImage from '../../assets/images/features/protection.png'

class Features extends Component {
    render () {
        const { labels, content, base } = this.props
        return (
            <div className="features-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.featuresTitle}</Label>
                </div>
                <Support3Text index={labels.whatFeaturesIndex} title={labels.whatFeaturesTitle} description={content.whatisEmasters} download={true} base={base}/>
                <GameSupport labels={labels}/>
                <ImageTitleComponent label={content.tournamentLeague.label} content1={content.tournamentLeague.content1} content2={content.tournamentLeague.content2} image={TournamentImage}  />
                <ImageTitleComponent label={content.realMoney.label} content1={content.realMoney.content1} content2={content.realMoney.content2} image={RealMoneyImage} reverse={true} />
                <ImageTitleComponent label={content.safeSecure.label} content1={content.safeSecure.content1} content2={content.safeSecure.content2} image={ProtectionImage}  />
                <JoinCompetition joinContents={content.joinContents} base={base}/>
            </div>
        )
    }
}

export default Features