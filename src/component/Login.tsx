import React from "react";
import { Form, Input, Button } from 'antd';
const { TextArea } = Input

const Login = () => {
    const contentRules = [
        { required: true, message: 'Please input a context' }
    ];
    const handleFormSubmit = (values: any) => {
        const title = values.title;
        const context = values.context;
        console.log(values, title, context);
    }
    return (
        <Form name="login" onFinish={(values) => handleFormSubmit(values)} scrollToFirstError>
            <Form.Item name="username" label="Username" rules={contentRules} >
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={contentRules} >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>);
}
export default Login;