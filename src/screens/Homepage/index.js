import React , { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Benefits from '../../components/Benefits'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import CButton from '../../components/CButton'
import TitleCompnent from '../../components/TitleComponent'
import './index.css'
import '../index.css'
import {
    Label,
} from 'reactstrap'
import ReactPlayer from 'react-player'
import NextIcon from '../../assets/images/footer/next-icon.png'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import TwitchIcon from '../../assets/images/footer/twitch-icon.png'
import DiscordIcon from '../../assets/images/footer/discord-icon.png'
import UBISoftLogo from '../../assets/images/ubisoft-logo.png'
import NGameLogo from '../../assets/images/ngame-logo.png'
import MaiseLogo from '../../assets/images/maise-logo.png'
import PlayVideoIcon from '../../assets/images/homepage/play-video.png'
import StopVideoIcon from '../../assets/images/homepage/stop-video.png'
class Home extends Component {
    constructor () {
        super ()
        this.state = {
            isPlaying: true,
        }
    }
    playVideo = () => {
        const isPlaying = this.state.isPlaying
        this.setState({
            isPlaying: !isPlaying,
        })
    }
    render () {
        const {labels, content, base } = this.props
        const classname = this.props.location.pathname.split("/");
        var isHome = false
        if ( classname[2] == "") {
            isHome = true
        }
        console.log("Home page is ", classname, isHome)
        return (
            <div className={isHome? "home-container home" : "home-container"}>
                <div className="join-challenge-container">
                    <div className="join-challenge">
                        <TitleCompnent index={labels.joinIndex} title={labels.joinTitle} />
                        <div className="join-button-area">
                            <CButton title="FEATURE" target="features" base={base}/>
                            <CButton title="DOWNLOAD" target='download' base={base}/>
                        </div>
                    </div>
                    <div className="join-social">
                        <a href="https://www.instagram.com" target="blank"><img src={DiscordIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={InstagramIcon} alt="Facebook" /></a>
                        <a href="https://www.instagram.com" target="blank"><img src={FacebookIcon} alt="Instagram" /></a>
                        <a href="https://www.twitch.com" target="blank"><img src={TwitchIcon} alt="Twitch" /></a>
                    </div>
                </div>
                <div className="about-platform-container">
                    <div className="about-platform">
                        <img src={NextIcon} alt="Next Icon"/>
                        <div className="about-platform-textarea">
                            <Label className="text-mid-paragraph">{content.aboutPlatform.label}</Label>
                            <p className="text-paragraph">{content.aboutPlatform.content}</p>
                        </div>
                    </div>
                    <div className="howitworks-video">
                        <div className="video-container">
                            <ReactPlayer url='https://www.youtube.com/watch?v=uilkmUoXoLU' playing={this.state.isPlaying} loop={true}/>
                            <div className="video-textarea">
                                <div className="imagearea">
                                    <img src={this.state.isPlaying? StopVideoIcon : PlayVideoIcon} onClick={this.playVideo}/>
                                </div>
                                <div className="textarea" >
                                    <h3 className="text-mid-paragraph">See How It Works</h3>
                                    <p className="text-paragraph">Ut eniem ad minim veniam , quis nostrud exercitation</p>
                                    <p className="text-paragraph">ullamco laboris nisi ut aliquip exea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GameSupport labels={labels}/>
                <Benefits labels={labels} benefits={content.benefits}/>
                <div className="working-us-container">
                    <div className="support-textarea">
                        <TitleCompnent index={labels.workingIndex} title={labels.workingTitle} />
                        <div className="see-all-container">
                            <h3 className="text-mid-paragraph">See All</h3>
                            <div className="line"/>
                        </div>
                    </div>
                    <div className="partners-image">
                        <img src={UBISoftLogo} />
                        <img src={MaiseLogo} />
                        <img src={NGameLogo} />
                    </div>
                </div>
                <JoinCompetition joinContents={content.joinContents} base={base}/>
            </div>
        )
    }
}
export default withRouter(Home);
