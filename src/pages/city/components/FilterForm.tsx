import * as React from 'react';
import { Select, Form, Button, message } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import pro_axios from '@/Utils/axios'
import event from '@/Utils/event';

const Option = Select.Option
const FormItem = Form.Item

interface IFilterPageProps extends FormComponentProps {
	a1?: number;
}

const FilterPage: React.FunctionComponent<IFilterPageProps> = (props) => {

	//    对表单进行双向数据绑定 获取表单数据     验证表单数据     重置表单数据
	const { getFieldDecorator, getFieldsValue, validateFields, resetFields } = props.form

	//用于筛选表单请求的查询按钮回调函数
	const handelFilterSubmit = async () => {
		try {
			await validateFields();   //用来验证表单数据
			let data = getFieldsValue();  //获取选中的表单数据
			// console.log("res>>>>", res);
			// console.log("data>>>>", data);
			event.eve_emit("filterRequest", data)
		} catch (e) {
			message.info("表单数据有问题，请重新尝试")
		}
	}

	return <div className="FIlterPage">
		<Form layout="inline">
			<FormItem label="城市选择">
				{
					getFieldDecorator("open_city", {
						rules: [{
							required: true,
							message: "请选择城市"
						}]
					})(
						<Select placeholder="请选择城市" style={{ width: 120 }}>
							<Option value="1">北京</Option>
							<Option value="2">秦皇岛</Option>
							<Option value="3">深圳</Option>
							<Option value="4">云南</Option>
							<Option value="5">巴黎圣母院</Option>
						</Select>
					)
				}
			</FormItem>
			<FormItem label="停车模式">
				{
					getFieldDecorator("parking_mode", {
						rules: [{
							required: true,
							message: "必须选择停车模式"
						}]
					})(
						<Select placeholder="指定停车模式" style={{ width: 120 }}>
							<Option value=" ">全部</Option>
							<Option value="1">指定点停车模式</Option>
							<Option value="2">禁停区模式</Option>
						</Select>
					)
				}
			</FormItem>
			<FormItem label="加盟商授权状态">
				{
					getFieldDecorator("op_mode", {
						rules: [{
							required: true,
							message: '必须选择授权状态'
						}]
					})(
						<Select placeholder="加盟商状态" style={{ width: 120 }}>
							<Option value="1">已加盟</Option>
							<Option value="2">未加盟</Option>
						</Select>
					)
				}
			</FormItem>
			<FormItem>
				<Button
					type="primary"
					style={{ marginRight: 15 }}
					onClick={() => {
						handelFilterSubmit()
					}}
				>查询</Button>
				<Button onClick={() => resetFields()}>重置</Button>
			</FormItem>
		</Form>
	</div>;
};

export default Form.create()(FilterPage);