import React, { Component } from 'react'
import { connect } from 'react-redux'
import Download from '../../screens/Download'
import { 
 
 } from '../../actions/download';

const style = { 
    marginTop: '138px',
}
class DownloadContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="" style={style}>
                <Download {...this.props}/>
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
)(DownloadContainer);