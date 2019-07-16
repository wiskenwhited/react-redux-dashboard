import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../screens/Header';
import { connect } from 'react-redux'
import {
    changeLanguage
} from '../../actions/main'
const style = {
    width: '100%',
    zIndex: '100',
}
const style1 = {
    position: 'fixed',
    width: '100%',
    zIndex: '100',
}
class HeaderContainer extends Component {
    constructor (props) {
        super(props)
    }
    onChangeClassName = () => {
         return this.props.location.pathname.split("/");
    }
    render () {
        const classname = this.onChangeClassName();
        var isHome = false
        if ( classname[2] == "") {
            isHome = true
        }
        
        return (
            <div style={isHome? style : style1}>
                <Header {...this.props} isHome={isHome}/>
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
        changeLanguage: (locale) => {
            dispatch(changeLanguage(locale))
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
