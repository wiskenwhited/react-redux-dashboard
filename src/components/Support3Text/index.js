import React, { Component } from 'react'
import TitleCompnent from '../TitleComponent'
import CButton from '../CButton'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'

class Support3Text extends Component {
    render () {
        const { index, title, description, download, base} = this.props
        return (
            <div className="support-3-container">
                <div className="support-textarea-s">
                    <TitleCompnent index={index} title={title} />
                </div>
                <div className="support-2-textarea">
                    <div className="support-textarea-l">
                        <h3 className="text-mid-paragraph">{description.label}</h3>
                        <p className="text-paragraph">{description.content1}</p>
                        {download && <CButton title="DOWNLOAD" base={base} target="download"/>}
                    </div>
                    <div className="support-textarea-l">
                        <p className="text-paragraph">{description.content2}</p>
                        <p className="text-paragraph">{description.content3}</p>
                        {download && <CButton title="DOWNLOAD" base={base} target="download"/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Support3Text