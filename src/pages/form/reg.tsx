import * as React from 'react';
import { Card, Button, Radio, Input, Form, Icon, Select, Switch, Upload, DatePicker, Checkbox, message } from 'antd'
import { FormComponentProps, FormItemProps } from 'antd/es/form'

interface IRegPageProps extends FormComponentProps {
}

const { Item } = Form
const Option = Select.Option
const { TextArea } = Input;

const RegPage: React.FunctionComponent<IRegPageProps> = (props) => {

	//上传图片之后的图片编码
	const [imgSrc, setImg] = React.useState<string>("");

	const { getFieldDecorator, getFieldsValue, validateFields } = props.form

	const formLayout: FormItemProps = {
		wrapperCol: {
			lg: 12,
			sm: 24
		},
		labelCol: {
			lg: 6,
			sm: 24
		}
	}

	//编辑base64的图片信息
	let getBase64 = (img: File, callback: Function) => {
		const reader = new FileReader();
		reader.addEventListener("load", () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	//图片上传点击后的回调函数
	const handleChange = (info: any) => {
		//info会返回一个对象，其中对象 file 表示当前上传的文件
		//数组 fileList 表示当前上传的文件夹
		// console.log("info>>>", info);

		getBase64(info.file.originFileObj, (imageUrl: any) => {
			setImg(imageUrl)
		})
	}

	//设置表单提交的回调函数
	const handleSubmit = async () => {
		//返回一个Promise对象（resolve, reject）
		try {
			await validateFields()
			console.log("表单获取的数据是>>>>：", { ...getFieldsValue(), imgSrc });
			message.success("表单提交成功")
		} catch (e) {
			message.info("表单有问题，请刷新重新尝试登录")
		}
	}

	return <div className="RegPage">
		<Card title="注册表单">
			<Form layout="horizontal">
				<Item label="用户名" {...formLayout}>
					{
						getFieldDecorator("username", {
							rules: [{ required: true }]
						})(<Input
							type="text"
							placeholder={'请输入用户名'}
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>)
					}
				</Item>
				<Item label="密码" {...formLayout}>
					{
						getFieldDecorator("password", {
							rules: [{ required: true, message: "! please input your name" }]
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="text"
								placeholder={'请输入密码'}
							/>
						)
					}
				</Item>
				<Item label="性别" {...formLayout}>
					{
						getFieldDecorator("sex", {
							rules: [{ required: true, message: "! please input your ages" }],
							initialValue: 1
						})(
							<Radio.Group name="radiogroup">
								<Radio value={1}>男</Radio>
								<Radio value={2}>女</Radio>
							</Radio.Group>
						)
					}
				</Item>
				<Item label="年龄" {...formLayout}>
					{
						getFieldDecorator("age", {
							rules: [{ required: true, message: "! please input your ages" }],
							initialValue: 18
						})(
							<Input
								type="number"
								min={18}
								max={100}
								style={{ width: 175 }}
							/>
						)
					}
				</Item>
				<Item label="等级" {...formLayout}>
					{getFieldDecorator("auth_level", {
						initialValue: '1'
					})(
						<Select>
							<Option value={'1'}>LV1</Option>
							<Option value={'2'}>LV2</Option>
							<Option value={'3'}>LV3</Option>
							<Option value={'4'}>LV4</Option>
						</Select>
					)}
				</Item>
				<Item label="爱好" {...formLayout}>
					{getFieldDecorator("auth_level", {
						initialValue: ["1", "2"]  //多选select初始值是一个数组
					})(
						<Select mode="multiple">
							<Option value={'1'}>打篮球</Option>
							<Option value={'2'}>骑共享单车</Option>
							<Option value={'3'}>唱歌</Option>
							<Option value={'4'}>眼睛</Option>
							<Option value={'5'}>耳朵</Option>
							<Option value={'6'}>你的心情</Option>
							<Option value={'7'}>美丽动人</Option>
							<Option value={'8'}>物质任务</Option>
							<Option value={'9'}>天地万物</Option>
							<Option value={'10'}>皆可盘</Option>
						</Select>
					)}
				</Item>
				<Item label="婚否" {...formLayout}>
					{getFieldDecorator("isMarry", {
						valuePropName: "checked",
						initialValue: false
					})(
						<Switch />
					)}
				</Item>
				<Item label="生日" {...formLayout}>
					{getFieldDecorator("birthday", {
					})(
						<DatePicker
							showTime={true}
							format="YYYY-MM-DD HH: mm: ss"
						/>
					)}
				</Item>
				<Item label="地址" {...formLayout}>
					{getFieldDecorator("address", {
						initialValue: "",
						rules: [{
							required: true, message: "地址不能为空"
						}]
					})(
						<TextArea rows={3} />
					)}
				</Item>
				<Item label={' '} colon={false}  {...formLayout}>
					{
						getFieldDecorator("agree", {
							initialValue: true,
							valuePropName: 'checked'
						})(
							<Checkbox />
						)
					}
					<span style={{ marginLeft: 10 }}>我已阅读协议</span>
				</Item>
				<Item  {...formLayout} colon={false} label={" "}>
					<Upload
						listType="picture-card"  //设置上传列表的内建样式
						showUploadList={true}  //是否展开文件列表
						onChange={handleChange}
					>
						{/* 如果图片上传成功就显示图片，如果失败，则显示Icon */}
						{
							imgSrc ? <img style={{ width: "100%" }} src={imgSrc} alt="上传的图片" /> : <Icon type="plus" />
						}
					</Upload>
				</Item>
				<Item {...formLayout} colon={false} label={" "}>
					<Button onClick={() => handleSubmit()} >登录</Button>
				</Item>
			</Form>
		</Card>
	</div>;
};

//对当前的组件进行高阶组件封装操作
export default Form.create()(RegPage);
