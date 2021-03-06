import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
    Icon,
    Select,
    Tooltip,
    Radio,
    Row,
    Col,
    Checkbox,
    DatePicker
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const user_account_patern = /^[a-zA-Z0-9_-]{5,20}$/;


class UserAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    }


    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
            </Select>
        );


        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="User Account">
                    {getFieldDecorator('account', {
                        rules: [{
                            type: "string", pattern: user_account_patern, message: '???????????????5-20???????????????????????????????????????????????????'
                        }, {
                            required: true, message: 'Please input your user name!'
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Password">
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Confirm Password">
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span> Nickname&nbsp; <Tooltip title="What do you want others to call you?"> <Icon
                            type="question-circle-o"/></Tooltip></span>
                    )}>
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(
                        <Input addonBefore={prefixSelector} style={{width: "100%"}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Sex">
                    {getFieldDecorator('sex', {
                        initialValue: "1"
                    })(
                        <Radio.Group style={{width: "100%"}}>
                            <Radio.Button value="1" style={{width: "50%"}}>Men</Radio.Button>
                            <Radio.Button value="2" style={{width: "50%"}}>Women</Radio.Button>
                        </Radio.Group>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Birthday">
                    {getFieldDecorator('birthday', {
                        rules: [{required: false}],
                    })(
                        <DatePicker style={{width: "100%"}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Captcha"
                    extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={16}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: 'Please input the captcha you got!'}],
                            })(
                                <Input/>
                            )}
                        </Col>
                        <Col span={8}>
                            <Button style={{width: "100%"}}>Get captcha</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Row gutter={8}>
                        <Col span={4}>
                            <Button type="primary" htmlType="submit" style={{width:100}}>Add</Button>
                        </Col>

                        <Col span={4}>
                            <Button htmlType="button" style={{width:100}}>Cancel</Button>
                        </Col>
                    </Row>

                </FormItem>
            </Form>
        );
    }

}


export default class UserAdd
    extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const WrappedUserAddForm = Form.create()(UserAddForm);
        return (
            <WrappedUserAddForm/>
        );
    }
}
