import React, { Component } from 'react'
import TitleComponent from '../TitleComponent' 
import './index.css'
import '../../screens/index.css'
import {
    Label,
} from 'reactstrap'
import MemberAvatar from '../../assets/images/about/member.png'
class TeamCard extends Component {
    render () {
        return (
            <div className="team-card-container">
                <div className="image-content">
                    <img draggable={false} src={MemberAvatar}  alt="Avatar" />
                </div>
                <div className="resume-content">
                    <TitleComponent index="- Lead Developer" title="Francis Lang" />
                    <p className="text-paragraph">{`Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. `}</p>
                </div>
            </div>
        )
    }
}

export default TeamCard