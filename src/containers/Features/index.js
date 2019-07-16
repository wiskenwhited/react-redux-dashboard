import React, { Component } from 'react'
import { connect } from 'react-redux'
import Features from '../../screens/Features'
import { 
 
 } from '../../actions/features';

const style = { 
    marginTop: '138px',
}
class FeaturesContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <Features {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        base: state.main.base,
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
)(FeaturesContainer);