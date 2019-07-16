import React, { Component } from 'react';
import  { BrowserRouter } from 'react-router-dom'
import RouterComponent from '../router';
import { connect } from 'react-redux'

class LayoutsContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <BrowserRouter>
                <div className="layout-container">
                    <RouterComponent {...this.props}/>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        base: state.main.base,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutsContainer);
