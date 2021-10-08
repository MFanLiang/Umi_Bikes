import * as React from 'react';
import { Form, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import event from '@/Utils/event';

interface IOpenCityFormProps extends FormComponentProps {
}

const Option = Select.Option
const FormItem = Form.Item

const OpenCityForm: React.FunctionComponent<IOpenCityFormProps> = (props) => {

	//    对表单进行双向数据绑定 获取表单数据     验证表单数据     重置表单数据
	const { getFieldDecorator, getFieldsValue, validateFields, resetFields } = props.form

	const formItemLayout = {
		labelCol: {
			sm: 24,
			md: 6,
		},
		wrapperCol: {
			sm: 24,
			md: 16,
		},
	};

	React.useEffect(() => {
		let data = props.form
		event.eve_emit('get_openForm', data);
	}, []);

	return <div className="OpenCityForm">
		<Form>
			<FormItem {...formItemLayout} label="开通城市">
				{getFieldDecorator('open_city', {
					rules: [
						{
							required: true,
							message: '请选择城市！',
						},
					],
				})(
					<Select placeholder="请选择城市">
						<Option value="">全部</Option>
						<Option value="bj">北京</Option>
						<Option value="hz">杭州</Option>
					</Select>,
				)}
			</FormItem>
			<FormItem {...formItemLayout} label="运营模式">
				{getFieldDecorator('open_mode', {
					rules: [
						{
							required: true, //设定必选选项，如果不选择选项，表单下面会提示message指定的文字
							message: '请选择运营模式！'
						}
					]
					// initialValue: 1,
				})(
					<Select placeholder="请选择营运模式">
						{/* <Option value=""></Option> */}
						<Option value="1">自营</Option>
						<Option value="2">加盟</Option>
					</Select>,
				)}
			</FormItem>
			<FormItem {...formItemLayout} label="开通模式">
				{getFieldDecorator('open_userMode', {
					rules:[
						{
							required: true,
							message: '请选择停车区域范围！'
						}
					]
					// initialValue: 1,
				})(
					<Select placeholder="请选择停车区域">
						{/* <Option value=""></Option> */}
						<Option value="1">指定区域停车</Option>
						<Option value="2">禁停区</Option>
					</Select>,
				)}
			</FormItem>
		</Form>
	</div>;
};

export default Form.create()(OpenCityForm);
