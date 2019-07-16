import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from '../../screens/Contact'
import { 
 
 } from '../../actions/contact';

const style = { 
    marginTop: '138px',
}
class ContactContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <Contact {...this.props}/>
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
)(ContactContainer);