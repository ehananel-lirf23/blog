import React, {Component} from 'react';
import {Layout, Icon} from 'antd';
import "antd/dist/antd.css";


const {Header} = Layout;

class AppHeader extends Component {

    constructor(props) {

        super(props);

    }


    render() {
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <Icon
                    className="trigger"
                    type={this.props.siderCollapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.callbackToggle}/>
            </Header>
        )
    }
}


export default AppHeader;