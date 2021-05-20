import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';

import {Layout} from 'antd';

import SiderMenu from './SiderMenu.js';
import AppHeader from './AppHeader.js';

import Dashboard from './models/Dashboard.js';
import User from './models/system/User.js';
import UserAdd from './models/system/UserAdd.js';
import Role from './models/system/Role.js';
import Email from './models/Email.js';
import BlankPage from './models/page/BlankPage.js';
import E404 from './models/page/404.js';
import E500 from './models/page/500.js';
import Lock from './models/page/Lock.js';
import Login from './models/page/Login.js';


import './App.css';
import "antd/dist/antd.css";

const {Content} = Layout;


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            siderCollapsed: false,
            menuSelectedKey: []
        };
        this.callbackToggle = this.callbackToggle.bind(this);
    }

    callbackToggle() {
        this.setState({
            siderCollapsed: !this.state.siderCollapsed
        });
    }

    componentWillReceiveProps(nextProps) {

        // const locationChanged = nextProps.location !== this.props.location;

        const nextHash = nextProps.location.hash.substring(2) ? nextProps.location.hash.substring(2) : "dashboard";

        this.setState({menuSelectedKey: [nextHash]});

    }

    componentDidMount() {

        const nextHash = this.props.location.hash.substring(2) ? this.props.location.hash.substring(2) : "dashboard";

        this.setState({menuSelectedKey: [nextHash]});
    }

    render() {
        return (
            <HashRouter>
                <Layout>
                    <SiderMenu
                        siderCollapsed={this.state.siderCollapsed}
                        selectedKeys={this.state.menuSelectedKey}/>
                    <Layout>
                        <AppHeader
                            siderCollapsed={this.state.siderCollapsed}
                            callbackToggle={this.callbackToggle}/>

                        <Content
                            style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 80}}>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/user" component={User}/>
                            <Route path="/userAdd" component={UserAdd}/>
                            <Route path="/role" component={Role}/>
                            <Route path="/email" component={Email}/>
                            <Route path="/blank_page" component={BlankPage}/>
                            <Route path="/error404" component={E404}/>
                            <Route path="/error500" component={E500}/>
                            <Route path="/lock" component={Lock}/>
                            <Route path="/login" component={Login}/>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}

