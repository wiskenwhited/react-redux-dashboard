import React, { Component } from 'react';
import {
    Route,
    Switch,
    Router,
    Redirect
} from 'react-router'
import { withRouter } from 'react-router-dom'
import Headers from '../containers/Headers';
import Footers from '../containers/Footers';
import Homepage from '../containers/Homepage';
import Features from '../containers/Features';
import About from '../containers/About';
import Partners from '../containers/Partners';
import Help from '../containers/Help'
import Forums from '../containers/Forums';
import Contact from '../containers/Contact';
import Careers from '../containers/Careers';
import Download from '../containers/Download';
import Wangdong from '../containers/Wangdong';
import NotFound from '../screens/NotFound'
const style = {
    height: '100vh', display: 'flex' , flexDirection: 'column'
}
class RouterComponent extends Component {
    renderRoute = (classname, base) => {
        if (classname[1] === '') {
            return <Redirect to={`${base}/`} />
        }
    }
    render () {
        const base = localStorage.getItem('base')
        const classname = this.props.location.pathname.split("/");
        return (
            <div style={style}>
                <Headers />
                <Switch>
                    {this.renderRoute(classname, base)}
                    <Route path={`${base}/features`} component={Features} />
                    <Route path={`${base}/about`} component={About} />
                    <Route path={`${base}/partners`} component={Partners} />
                    <Route path={`${base}/help`} component={Help} />
                    <Route path={`${base}/forums`} component={Forums} />
                    <Route path={`${base}/contact`} component={Contact} />
                    <Route path={`${base}/careers` }component={Careers} />
                    <Route path={`${base}/download`} component={Download} />
                    <Route path={`${base}/wangdong`} component={Wangdong} />
                    <Route path={`${base}/`} component={Homepage} />
                    <Route path={`/`} component={Homepage} />
                    <Route component={NotFound}/>
                </Switch>
                <Footers />
            </div>
        )
    }
}
export default withRouter(RouterComponent);
