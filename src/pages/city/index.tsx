import * as React from 'react';
import { Card, Button, Table, Modal } from 'antd'
import { ColumnProps } from 'antd/es/table'
import pro_axios from '@/Utils/axios'
import event from '@/Utils/event';
import OpenCityForm from './components/OpenCityForm';

//引入FilterForm静态表单
import FilterForm from './components/FilterForm'

interface ICityPageProps {
}

const CityPage: React.FunctionComponent<ICityPageProps> = (props) => {

	//定义存放数据的state
	const [tableData, setTable] = React.useState<Array<any>>([])

	//控制模态框的显示
	const [modalVisible, setVisible] = React.useState<boolean>(false);

	const [openForm, setOpenForm] = React.useState<any>()

	//表格列的构建
	const columns: Array<ColumnProps<{}>> = [
		{
			title: '城市Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: '城市名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '用车模式',
			dataIndex: 'mode',
			key: 'mode',
			render(mode) {
				return mode === 1 ? "停车点" : "禁停区"
			}
		},
		{
			title: '授权加盟商',
			dataIndex: 'franchisee_name',
			key: 'franchisee_name',
		},
		{
			title: '城市管理员',
			dataIndex: 'city_admins',
			key: 'city_admins',
			render: arr => {
				return arr
					.map((item: any) => {
						return item.user_name;
					})
					.join(',');
			},
		},
		{
			title: '城市开通时间',
			dataIndex: 'open_time',
			key: 'open_time',
		},
		{
			title: '操作时间',
			dataIndex: 'update_time',
			key: 'update_time',
		},
		{
			title: '操作人',
			dataIndex: 'sys_user_name',
			key: 'sys_user_name',
		},
	]

	//componentDidMount生命周期函数钩子
	React.useEffect(() => {
		requestList()

		//筛选框事件的绑定
		event.eve_on("filterRequest", (arg: any) => {
			requestList(arg)
		})
		//开通城市事件的绑定
		event.eve_on("get_openForm", (inst: any) => {
			setOpenForm(inst)
		})
	}, [])

	//请求接口数据
	const requestList = async (param?: any) => {
		let res: any = await pro_axios.axios({ url: 'open_city', data: { params: param } })
		let data = res.result.item_list
		data.map((item: any, index: number) => {
			item.key = index
		})
		setTable(data)
	}

	//开通城市的按钮回调函数
	const handleOpenCity = () => {
		setVisible(true)
	}

	//开通城市模态框的确认按钮的回调
	const handleOpenSubmit = async () => {
		let { getFieldsValue, validateFields, resetFields } = openForm
		try {
			await validateFields();  //用来验证表单数据
			//发起接口数据请求
			pro_axios.axios({
				url: '/open_city', data: {
					params: getFieldsValue() //将获得的表单字段值传入到接口open_city
				}
			}).then((res) => {
				setVisible(false); //接口状态反馈正常后关闭模态框
				requestList();   //重新请求接口数据，用来更新列表数据
				resetFields();   //清空上一步表单的所有字段值
			})
		} catch (e: any) {
			console.log("表单有问题，请刷新重试", e.message);
		}
	}

	return <div className="CityPage">
		<Card style={{ marginBottom: 10 }}>
			<FilterForm />
		</Card>
		<Card>
			<Button type="primary" onClick={() => handleOpenCity()}>开通城市</Button>
		</Card>
		{/* 指定开通城市的模态框 */}
		<Modal
			title="开通城市"
			visible={modalVisible}
			okText={'确定'}
			cancelText={'取消'}
			onCancel={() => {
				setVisible(false)
			}}
			onOk={handleOpenSubmit}
		>
			<OpenCityForm />
		</Modal>
		<Card title="城市列表">
			<Table
				dataSource={tableData}
				columns={columns}
				rowSelection={{
					type: 'radio',  //指定为单选按钮
					onChange: (selectedRowKeys, selectedRows) => {
						console.log("selectedRowKeys>>>===", selectedRowKeys);
						console.log("selectedRows>>>>===", selectedRows);
					}
				}}
			/>
		</Card>
	</div >;
};

export default CityPage;
