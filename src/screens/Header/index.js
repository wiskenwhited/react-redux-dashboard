import React , { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import './index.css'
//ReactStrap
import {
    NavbarBrand,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { slide as Menu } from 'react-burger-menu'
//Import
import CButton from '../../components/CButton'
import LogoImage from '../../assets/images/emasters_white.png'
import USFlag from '../../assets/images/header/US.png'
import BRFlag from '../../assets/images/header/BR.png'
import CNFlag from '../../assets/images/header/CN.png'
import MenuIcon from '../../assets/images/header/menu.png'
import MenuCrossIcon from '../../assets/images/header/menu-cross.png'
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import DiscordIcon from '../../assets/images/footer/discord-icon.png'
import TwitchIcon from '../../assets/images/footer/twitch-icon.png'
const style = {
  backgroundColor: 'transparent'
}
const style1 = {

}
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
        };
      }

      toggle() {
        this.setState({
          isOpen: true
        });
      }
      changeLanguage = (locale) => {
        const {changeLanguage} = this.props
        changeLanguage(locale)
      }

      onChangeLanguage = ( oldBase ) => {
        const { base } = this.props
        const classname = this.props.location.pathname.split("/");
        if (oldBase === base && classname[2] !== null) {
            return <Redirect to={`${base}/${classname[2]}`} />
        }
      }

      render() {
        const { base, isHome } = this.props
        const classname = this.props.location.pathname.split("/");
        const url = classname[2]
        return (
          <div className="header-container" style={isHome? style : style1}>
              {this.onChangeLanguage(base)}
              <Menu width={'100%'} customBurgerIcon={ <img src={MenuIcon} /> } customCrossIcon={ <img src={MenuCrossIcon} />}>
                  <div className="btm-header-container">
                      <NavbarBrand href="/">
                          <img src={LogoImage} alt="Logo Image" />
                      </NavbarBrand>
                      <UncontrolledDropdown>
                          <DropdownToggle nav caret>
                            Lang-EN
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem >
                              <img src={USFlag}/>
                              <p onClick={() => this.changeLanguage('/en')}>English, USA</p>
                            </DropdownItem>
                            <DropdownItem >
                              <img src={BRFlag}/>
                              <p onClick={() => this.changeLanguage('/pt')}>Português do Brasil</p>
                            </DropdownItem>
                            <DropdownItem >
                              <img src={CNFlag}/>
                              <p onClick={() => this.changeLanguage('/cn')}>中文</p>
                            </DropdownItem>
                          </DropdownMenu>
                      </UncontrolledDropdown>
                  </div>
                  <div className="nav-bar-link">
                      <NavLink href={`${base}/`}>HOME</NavLink>
                      <NavLink href={`${base}/features`}>FEATURES</NavLink>
                      <NavLink href={`${base}/about`}>ABOUT</NavLink>
                      <NavLink href={`${base}/partners`}>PARTNERS</NavLink>
                      <NavLink href={`${base}/help`}>HELP</NavLink>
                      <NavLink href={`${base}/contact`}>CONTACT</NavLink>
                      <NavLink href={`${base}/forums`}>FORUMS</NavLink>
                      <NavLink href={`${base}/wangdong`}>WNAGDONG</NavLink>
                      <CButton title="DOWNLOAD" target="download" base={base}/>
                  </div>
                  <div className="btm-footer-container">
                      <div className="social-mark">
                          <a href="https://www.discord.com" target="blank"><img src={DiscordIcon} alt="Discord" /></a>
                          <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                          <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                          <a href="https://www.twitch.com" target="blank"><img src={TwitchIcon} alt="Twitch" /></a>
                      </div>
                      <h3>hello@emaster.co</h3>
                  </div>
              </Menu>

              <NavbarBrand href="/">
                  <img src={LogoImage} alt="Logo Image" />
              </NavbarBrand>

              <div className="collapse-container">
                  <div className="nav-bar-link">
                      <NavLink className={url == ""? "active" : ""} href={`${base}/`}>HOME</NavLink>
                      <NavLink className={url == "features"? "active" : ""} href={`${base}/features`}>FEATURES</NavLink>
                      <NavLink className={url == "about"? "active" : ""} href={`${base}/about`}>ABOUT</NavLink>
                      <NavLink className={url == "partners"? "active" : ""} href={`${base}/partners`}>PARTNERS</NavLink>
                      <NavLink className={url == "help"? "active" : ""} href={`${base}/help`}>HELP</NavLink>
                      <NavLink className={url == "contact"? "active" : ""} href={`${base}/contact`}>CONTACT</NavLink>
                      <NavLink className={url == "forums"? "active" : ""} href={`${base}/forums`}>FORUMS</NavLink>
                      <NavLink className={url == "wangdong"? "active" : ""} href={`${base}/wangdong`}>WANGDONG</NavLink>
                  </div>
                  <CButton title="DOWNLOAD" target="download" base={base}/>
                  <UncontrolledDropdown>
                      <DropdownToggle nav caret>
                        Lang-EN
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem >
                          <img src={USFlag}/>
                          <p onClick={() => this.changeLanguage('/en')}>English, USA</p>
                        </DropdownItem>
                        <DropdownItem >
                          <img src={BRFlag}/>
                          <p onClick={() => this.changeLanguage('/pt')}>Português do Brasil</p>
                        </DropdownItem>
                        <DropdownItem >
                          <img src={CNFlag}/>
                          <p onClick={() => this.changeLanguage('/cn')}>中文</p>
                        </DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              </div>
          </div>
        );
      }
}

export default  withRouter(Header)
