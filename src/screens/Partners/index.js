import React, { Component } from 'react'
import Support3Text from '../../components/Support3Text'
import TitleComponent from '../../components/TitleComponent'
import Benefits from '../../components/Benefits'
import CAccordion from '../../components/CAccordion'
import FamilyCard from '../../components/FamilyCard'
import Gallery2 from '../../components/Gallery2'
import BottomCard from '../../components/BottomCard'
import './index.css'
import '../index.css'
import {
    Label,
} from 'reactstrap'
import Avatar from '../../assets/images/partners/avatar.png'

import JoinCompetition from '../../components/JoinCompetition';
import NextArrow from '../../assets/images/partners/arrow-next.png'
import PreviousArrow from '../../assets/images/partners/arrow-previous.png'
const faqs = [
    {
        title: `In scelerisque sem at dolor?`,
        content: `Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. `
    },
    {
        title: `Maecenas mattis. Sed convallis tristique sem?`,
        content: `Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. `
    },
    {
        title: `Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam?`,
        content: `Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. `
    },
    {
        title: `In scelerisque sem at dolor?`,
        content: `Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. `
    },

]
class Partners extends Component {
    renderFamilyCard = () => {
        const items = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11]
        return items.map(
            (item, index) => {
                return  <div key={index}>
                            <FamilyCard position="- Youtuber" name="Isa Edison" avatar={Avatar}/>
                        </div>
            }
        )
    }
    reducePartnersIndex = () => {
        const { reducePartnersIndex} = this.props
        reducePartnersIndex()
    }
    increasePartnersIndex = () => {
        const { increasePartnersIndex } = this.props
        increasePartnersIndex()
    }
    render () {
        const { labels, content, base, partnersIndex } = this.props
        return (
            <div className="partners-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.partnersTitle}</Label>
                </div>
                <Support3Text index={labels.coFriendsIndex} title={labels.coFriendsTitle} description={content.coFriends}/>
                <div className="meet-partners-container">
                    <div className="partners-content">
                        <Gallery2 partnersIndex={partnersIndex}/>
                        <div className="partners-arrow">
                            <img src={PreviousArrow} onClick={this.reducePartnersIndex}/> 
                            <img src={NextArrow} onClick={this.increasePartnersIndex}/>
                        </div>
                    </div>
                    <BottomCard index={labels.joinTeamIndex} link={labels.joinTeamLink} investor={true}/>
                </div>
                <div className="extend-family-container">
                    <div className="first-card-container">
                        <TitleComponent index={labels.familyIndex} title={labels.familyTitle} />
                    </div>
                    { this.renderFamilyCard() }
                    
                </div>
                <Benefits labels={labels} benefits={content.benefits}/>
                <div className="faq-container">
                    <h1>{labels.faqTitle}</h1>
                    <CAccordion items={faqs}/>
                </div>
                <JoinCompetition joinContents={content.joinContents} base={base}/>
            </div>
        )
    }
}

export default Partners