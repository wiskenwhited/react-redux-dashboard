import React, { Component } from 'react';
import Footer from '../../screens/Footer'
import { connect } from 'react-redux'
class FooterContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="">
                <Footer {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        labels: state.main.labels,
        content: state.main.content,
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
)(FooterContainer);
