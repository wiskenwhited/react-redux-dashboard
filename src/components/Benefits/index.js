import React, { Component } from 'react'
import FeatureComponent from '../FeatureComponent'
import TitleComponent from '../TitleComponent'
import './index.css'
import {
    Label
} from 'reactstrap'

import SafeSecureImage from '../../assets/images/homepage/safe-secure.png'
import DesktopAppImage from '../../assets/images/homepage/desktop-app.png'
import TrackProgressImage from '../../assets/images/homepage/track-progress.png'
import FavouriteGamesImage from '../../assets/images/homepage/favourite-games.png'
import GreatSupportImage from '../../assets/images/homepage/great-support.png'
class Benefits extends Component {
    render () {
        const { labels, benefits } = this.props
        return (
            <div className="benefits-container">
                <TitleComponent  index={labels.whyUsIndex} title={labels.whyUsTitle}/>
                <FeatureComponent label={benefits.safeSecure.label} content={benefits.safeSecure.content} image={SafeSecureImage}/>
                <FeatureComponent label={benefits.desktopApp.label} content={benefits.desktopApp.content} image={DesktopAppImage}/>
                <FeatureComponent label={benefits.trackProgress.label} content={benefits.trackProgress.content} image={TrackProgressImage}/>
                <FeatureComponent label={benefits.favouriteGames.label} content={benefits.favouriteGames.content} image={FavouriteGamesImage}/>
                <FeatureComponent label={benefits.greatSupport.label} content={benefits.greatSupport.content} image={GreatSupportImage}/>
            </div>
        )
    }
}

export default Benefits