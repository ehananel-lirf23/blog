import React, {Component} from 'react';
import {Form, Table, Divider, Input, Button, Icon, Select, Radio} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#/role">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age'
}, {
    title: 'Address',
    dataIndex: 'address'
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:void(0);">Delete</a>
            <Divider type="vertical"/>
            <a href="javascript:void(0);" className="ant-dropdown-link">More actions <Icon type="down"/></a>
        </span>
    ),
}];

class UserSearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expand: false,
        };
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }


    handleReset = () => {
        this.props.form.resetFields();
    }


    render() {


        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator('phonePrefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 24},
            }
        };

        return (
            <Form
                layout="inline"
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}>


                <FormItem {...formItemLayout}>
                    {getFieldDecorator(`userName`)(
                        <Input prefix={<Icon type="user"/>} placeholder="Please input user name"/>
                    )}
                </FormItem>

                <FormItem {...formItemLayout}>
                    {getFieldDecorator(`sex`,{
                        initialValue: "0",
                    })(
                        <Radio.Group>
                            <Radio.Button value="0">All</Radio.Button>
                            <Radio.Button value="1">Men</Radio.Button>
                            <Radio.Button value="2">Women</Radio.Button>
                        </Radio.Group>
                    )}
                </FormItem>

                <FormItem {...formItemLayout}>
                    {getFieldDecorator(`email`, {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: false, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input prefix={<Icon type="mail"/>} placeholder="Please input email"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayout}>
                    {getFieldDecorator(`mobile`)(
                        <Input
                            addonBefore={prefixSelector}
                            prefix={<Icon type="mobile"/>}
                            style={{width: '100%'}}
                            placeholder="Please input mobile"/>
                    )}
                </FormItem>


                <Button type="primary" htmlType="submit">Search</Button>
                <Button style={{marginLeft: 8}} onClick={this.handleReset}>
                    Clear
                </Button>


            </Form>
        )
    }


}


export default class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const WrappedUserSearchForm = Form.create()(UserSearchForm);
        return (
            <div>
                <WrappedUserSearchForm/>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}
