import React, {Component,} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import "antd/dist/antd.css";

const {Sider} = Layout;
const {Item, SubMenu} = Menu;


const menuItemsList = [{
    key: "dashboard",
    icon: "laptop",
    path: "dashboard",
    name: "Dashboard"
}, {
    key: "system",
    icon: "setting",
    name: "System",
    children: [
        {
            key: "user",
            icon: "user",
            path: "user",
            name: "User"
        }, {
            key: "role",
            icon: "team",
            path: "role",
            name: "Role"
        }
    ]
}, {
    key: "email",
    icon: "mail",
    path: "email",
    name: "Email"
}, {
    key: "pages",
    icon: "book",
    name: "Pages",
    children: [
        {
            key: "blank_page",
            icon: "file",
            path: "blank_page",
            name: "Blank Page"
        }, {
            key: "error404",
            icon: "exclamation-circle",
            path: "error404",
            name: "404 Error"
        }, {
            key: "error500",
            icon: "close-circle",
            path: "error500",
            name: "500 Error"
        }, {
            key: "lock",
            icon: "lock",
            path: "lock",
            name: "Lock Screen"
        }, {
            key: "login",
            icon: "check",
            path: "login",
            name: "Login Page"
        }
    ]
}];

class SiderMenu extends Component {

    constructor(props) {

        super(props);

    }

    componentWillReceiveProps(nextProps) {
        console.log("props.selectedKey", nextProps.selectedKeys)
        console.log("props.siderCollapsed", nextProps.siderCollapsed)
    }


    generateItem(menuItemsList) {
        return menuItemsList.map((menuItem) => {
            if (menuItem.children && menuItem.children.length > 0) {
                return (
                    <SubMenu key={menuItem.key}
                             title={<span><Icon type={menuItem.icon}/><span>{menuItem.name}</span></span>}>
                        {this.generateItem(menuItem.children)}
                    </SubMenu>
                );
            } else {
                return (
                    <Item key={menuItem.key}>
                        <Link to={menuItem.path}>
                            <Icon type={menuItem.icon}></Icon>
                            <span>{menuItem.name}</span>
                        </Link>
                    </Item>
                )
            }
        });
    }

    getOpenKey(menuItemsList, path, keys) {
        if (keys === undefined) {
            keys = [];
        }

        menuItemsList.map((menuItem) => {
            if (menuItem.children && menuItem.children.length > 0) {
                const openMenu = menuItem.children.filter((item) => {
                    return item.path === path[0];
                });
                if (openMenu.length >= 1) {
                    keys.push(menuItem.key);
                }
                this.getOpenKey(menuItem.children, path, keys);
            }
        });
    }


    render() {
        const menuItems = this.generateItem(menuItemsList);

        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.siderCollapsed}>
                <div className="logo"/>
                <Menu mode="inline" defaultSelectedKeys={["dashboard"]}

                      selectedKeys={this.props.selectedKeys}>
                    {menuItems}
                </Menu>
            </Sider>
        )
    }
}


export default SiderMenu;