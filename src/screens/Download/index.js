import React , { Component } from 'react'
import DownloadVersion from '../../components/DownloadVersion'
import TitleComponent from '../../components/TitleComponent'
import DButton from '../../components/DButton'
import BottomCard from '../../components/BottomCard'
import './index.css'
import '../index.css'
import {
    Label,
    Button,
    Col, 
    Row,
} from 'reactstrap'
import NextIcon from '../../assets/images/download/next-icon.png'
import MacLogoBlack from '../../assets/images/download/mac-logo-black.png'
import MacLogoWhite from '../../assets/images/download/mac-logo-white.png'
import WindowsLogoBlack from '../../assets/images/download/windows-logo-black.png'
import WindowsLogoWhite from '../../assets/images/download/windows-logo-white.png'
import LinuxLogoBlack from '../../assets/images/download/linux-logo-black.png'
import LinuxLogoWhite from '../../assets/images/download/linux-logo-white.png'
// import labels from '../../constants/labels'
import content from '../../constants/content'
class Download extends Component {
    renderActiveDownload = (arrVersion) => {
        return arrVersion.map(
            (item, index) => {
                if (item.index === navigator.platform) {
                    return <div key={index}><DButton title="DOWNLOAD NOW" image={item.imageA} active={true}/></div>
                }
            }
        )
    }
    renderNonActiveDownload = (arrVersion) => {
        return arrVersion.map(
            (item, index) => {
                if (item.index !== navigator.platform) {
                    return <DownloadVersion index={index} title={item.title} image={item.image}/>
                }
            }
        )
    }
    render () {
        const {labels} = this.props
        var arrVersion = [
            {
                index: 'Win32',
                title: labels.windowsVersion,
                image: WindowsLogoWhite,
                imageA: WindowsLogoBlack,
            },
            {
                index: 'MacIntel',
                title: labels.macVersion,
                image: MacLogoWhite,
                imageA: MacLogoBlack,
            },
            {
                index: 'Linux',
                title: labels.linuxVersion,
                image: LinuxLogoWhite,
                imageA: LinuxLogoBlack,
            }
        ]
        return (
            <div className="download-container">
                <div className="download-conent-h">
                    <TitleComponent index={labels.downloadIndex} title={labels.downloadTitle} /> 
                    {this.renderActiveDownload(arrVersion)}
                </div>
                <div className="machine-version">
                    {this.renderNonActiveDownload(arrVersion)}
                </div>
                <div className="feature-help">
                    <div className="feature-content">
                        <img src={NextIcon} alt="Next Arrow" />
                        <div className="text-content-f">
                            <h3 className="text-mid-paragraph">{content.exploreFeatures.label}</h3>
                            <p className="text-paragraph">{content.exploreFeatures.content}</p>
                        </div>
                        <BottomCard index={labels.needHelpIndex} link={labels.needHelpLink} explore={true}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Download