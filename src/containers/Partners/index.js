import React, { Component } from 'react'
import { connect } from 'react-redux'
import Partners from '../../screens/Partners'
import { 
        increasePartnersIndex,
        reducePartnersIndex,
        
 } from '../../actions/partners';
const style = { 
    marginTop: '138px',
}
 
class PartnersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="" style={style}>
                <Partners {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        partnersIndex: state.partners.partnersIndex,
        base: state.main.base,
        labels: state.main.labels,
        content: state.main.content,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increasePartnersIndex: () => {
            dispatch(increasePartnersIndex())
        },
        reducePartnersIndex: () => {
            dispatch(reducePartnersIndex())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PartnersContainer);