import * as React from 'react';
import { NavLink } from 'umi'
import { Form, Button, Input, Card, Icon, message, Checkbox } from 'antd'
import { FormComponentProps } from 'antd/es/form'

interface ILoginPageProps extends FormComponentProps {
}

const { Item } = Form

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

	//getFieldDecorator用来获取表单项的字段值
	//getFieldValue 用来获取表单的值
	const { getFieldDecorator, getFieldsValue, validateFields } = props.form

	let handleSubmit = async () => {
		try {
			let s1 = await validateFields();
			let data = getFieldsValue();
			message.success(`用户名：${data.username} <><><> 密码：${data.password}`)
		} catch (e) {
			message.info("表单不对，请重新检查一下表单输入的数据")
		}

		// let formData = getFieldsValue();
		// console.log("formData.username: >>>", formData.username);
		// console.log("formData.password: >>>", formData.password);
	}

	return <div className="LoginPage">
		<Card title="内联表单">
			<Form layout="inline">
				<Item label="用户名">
					{
						getFieldDecorator("username1", {
							rules: [{ required: true, message: "! please input your name" }]
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="text"
								placeholder={'用户名'}
							/>
						)
					}
				</Item>
				<Item label="密码">
					{
						getFieldDecorator("password1", {
							rules: [{ required: true, message: "! Password cannot be empty." }]
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder={'密码'}
							/>
						)
					}
				</Item>
				<Item className="card-content">
					<Button type="primary" onClick={() => handleSubmit()}>登录</Button>
					<NavLink to="/form/reg"><Button style={{ marginLeft: 10 }}>注册</Button></NavLink>
				</Item>
			</Form>
		</Card>

		<Card title="普通登录框">
			<Form layout="horizontal" style={{ width: 300 }}>
				<Item label="用户名">
					{
						getFieldDecorator("username2", {
							rules: [{ required: true, message: "! please input your name" }]
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="text"
								placeholder={'用户名'}
							/>
						)
					}
				</Item>
				<Item label="密码">
					{
						getFieldDecorator("password2", {
							rules: [{ required: true, message: "! Password cannot be empty." }]
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder={'密码'}
							/>
						)
					}
				</Item>
				<Item>
					{
						getFieldDecorator("remember", {
							valuePropName: 'checked',
							initialValue: true
						})(<Checkbox>我已经阅读该协议</Checkbox>)
					}
					<a className="login-form-forgot" href="">
						Forgot password
					</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					Or <a href="">register now!</a>
				</Item>
			</Form>
		</Card>
	</div >;
};

//对当前的组件进行高阶组件封装操作
export default Form.create()(LoginPage);
