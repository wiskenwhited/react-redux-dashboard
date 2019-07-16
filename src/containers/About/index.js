import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../../screens/About'
import { 
    increaseTeamIndex,
    reduceTeamIndex,
 } from '../../actions/about';


const style = { 
    marginTop: '138px',
}
class AboutContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <About {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        teamIndex: state.about.teamIndex,
        base: state.main.base,
        labels: state.main.labels,
        content: state.main.content,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increaseTeamIndex: () => {
            dispatch(increaseTeamIndex())
        },
        reduceTeamIndex: () => {
            dispatch(reduceTeamIndex())
        },
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutContainer);