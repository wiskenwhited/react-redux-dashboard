import React, { Component } from 'react'
import './index.css'
import Accordion from 'react-simple-accordion';

const list = [
  {title: 'Header 1', body: 'Test 1'},
  {title: 'Header 2', body: 'Test 2'},
];
class CSimpleAccordion extends Component {
    render () {
        return (
            <Accordion list={list}>
                {({props: {title, body}, isOpen}) => ({
                header: () => (
                    <div>
                        {title}
                    </div>
                ),
                body: () => (
                    <div>
                    {body}
                    </div>
                ),
                })}
            </Accordion>
        )
    }
}

export default CSimpleAccordion