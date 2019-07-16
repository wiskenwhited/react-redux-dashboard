import React, { Component } from 'react'
import { connect } from 'react-redux'
import Help from '../../screens/Help'
import { 
 
 } from '../../actions/help';

const style = { 
    marginTop: '138px',
}
class HelpContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <Help {...this.props}/>
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
)(HelpContainer);