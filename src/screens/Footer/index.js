import React, {Component } from 'react'
import NInput from '../../components/NInput'
import './index.css'
import {
    Label,
    NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import DiscordIcon from '../../assets/images/footer/discord-icon.png'
import TwitchIcon from '../../assets/images/footer/twitch-icon.png'
import LogoImage from '../../assets/images/footer/logo.png'
import NextIcon from '../../assets/images/footer/next-icon.png'

class Footer extends Component {
    render () {
        console.log("*************************", navigator.platform)
        const {base} = this.props
        return (
            <div className="footer-container">
                <div className="top-footer">
                    <div className="top-left-footer">
                        <div className="footer-image-content">
                            <img src={LogoImage} alt="Footer Logo" />
                        </div>
                        <div className="link-area">
                            <div className="link-area-label">
                                <NavLink href={`${base}/features`}><p>Features</p></NavLink>
                                <NavLink href={`${base}/about`}><p>About</p></NavLink>
                                <NavLink href={`${base}/partners`}><p>Partners</p></NavLink>
                                <NavLink href={`${base}/contact`}><p>Contact</p></NavLink>
                            </div>
                            <div className="link-area-label">
                                <NavLink href={`${base}/help`}><p>Help</p></NavLink>
                                <NavLink href={`${base}/forums`}><p>Forums</p></NavLink>
                                <NavLink href="https://angel.co/emasters/jobs" target="blank"><p>Careers</p></NavLink>
                            </div>
                            <div className="link-area-company">
                                <h1>eMasters</h1>
                                <p>1014 Capp St, San Francisco</p>
                                <p>CA 94110</p>
                            </div>
                        </div>
                    </div>
                    <div className="mail-area">
                        <NInput placeholder="Join our mailing list"/>
                        <img src={NextIcon} alt="Next Icon" />
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="social-mark">
                        <a href="https://www.discord.com" target="blank"><img src={DiscordIcon} alt="Discord" /></a>
                        <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                        <a href="https://www.twitch.com" target="blank"><img src={TwitchIcon} alt="Twitch" /></a>
                    </div>
                    <div className="bottom-right-footer">
                        <div className="bottom-link">
                            <Link to="#">Privacy Policy</Link>
                            <Link to="#">Terms & Conditions</Link>
                        </div>
                        <Label>Copyright@ 2018 eMasters</Label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer