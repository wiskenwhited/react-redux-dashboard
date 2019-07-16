import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
 
 } from '../../actions/careers';

 
class CareersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="">
                
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        labels: state.main.labels,
        content: state.main.content,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CareersContainer);