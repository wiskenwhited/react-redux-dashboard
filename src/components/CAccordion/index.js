import React, { Component } from 'react';
import './index.css'
import '../../screens/index.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import PlusIcon from '../../assets/images/partners/plus-icon.png'
import MinusIcon from '../../assets/images/partners/minus-icon.png'
class CAccordion extends Component {
    renderAccordionItems = (items ) => {
        return items.map(
            (item, index) => {
                return  <div key={index}>
                    <CAccordionItem title={item.title} content={item.content}/>
                </div>
            }
        )
    }
    render () {
        const { items } = this.props
        return (
            <Accordion accordion={false}>
                {this.renderAccordionItems(items)}
            </Accordion>
        )
    }
}

class CAccordionItem extends Component {
    constructor () {
        super ()
        this.state = {
            isOpen: false
        }
    }
    onClick = () => {
        const isOpen = this.state.isOpen
        this.setState({
            isOpen: !isOpen
        })
    }
    render () {
        const { title, content } = this.props
        return (
            <div className="accordion-item" onClick={this.onClick}>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3 className="text-mid-paragraph1 text-mid-paragraph">{title}</h3>
                        {this.state.isOpen? <img src={MinusIcon} alt="Minus"/> : <img src={PlusIcon} alt="Plus" />}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p className="text-paragraph1 text-paragraph">{content}</p>
                    </AccordionItemBody>
                </AccordionItem>
            </div>
        )
    }
}
export default CAccordion