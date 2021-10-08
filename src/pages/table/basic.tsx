import * as React from 'react';
import { Card, Table, message, notification } from 'antd'
import pro_axios from '@/utils/axios'
import { ColumnProps } from 'antd/es/table'

interface IBasicPageProps {
}

//自定义接口泛型
interface tColumn {
	id: string,
	order_sn: string,
	bike_sn: string,
	user_id: string,
	mobile: string,
	distance: number,
	start_time: number,
	end_time: number,
	key?: any
}

const BasicPage: React.FunctionComponent<IBasicPageProps> = (props) => {

	//设置表格列的属性
	const [tableData, setTable] = React.useState<tColumn[]>([])

	const [selectKey, setRowKey] = React.useState<Array<any>>([])

	const [mutiKey, setMuti] = React.useState<Array<any>>([])

	//指定数据数组，也就是表格的列名
	const tableColumn: ColumnProps<tColumn>[] = [
		{
			title: '订单Id',
			dataIndex: 'id',
			key: 'id'
		},
		{
			title: '订单编号',
			dataIndex: 'order_sn',
			key: 'order_sn'
		},
		{
			title: '车辆编号',
			dataIndex: 'bike_sn',
			key: 'bike_sn'
		},
		{
			title: '用户编号',
			dataIndex: 'user_id',
			key: 'user_id'
		},
		{
			title: '手机号',
			dataIndex: 'mobile',
			key: 'mobile'
		},
		{
			title: '距离',
			dataIndex: 'distance',
			key: 'distance'
		},
		{
			title: '开始时间',
			dataIndex: 'start_time',
			key: 'start_time'
		},
		{
			title: '结束时间',
			dataIndex: 'end_time',
			key: 'end_time'
		},
	]

	//请求接口数据
	const requestList = async () => {
		try {
			let res: any = await pro_axios.axios({
				url: '/order/list'
			})
			let data = res.result.item_list
			data.map((item: any, index: any) => { // 让每一条记录，有位移的键值
				item.key = index
			})
			setTable(data)   // 将请求接口得到的数据设定到Table中
		} catch (e: any) {
			message.info("服务器端接口出现了问题")
			message.info(e.response)
		}
	}

	//componentDidMount生命周期钩子函数
	React.useEffect(() => {
		requestList()
	}, [])

	return <div className="BasicPage">
		<Card title="基础表格">
			<Table
				dataSource={tableData}  //表格数据源
				columns={tableColumn}   //数据数组，也就是表格的列名
			/>
		</Card>
		<Card title="带有单选按钮的表格">
			<Table
				dataSource={tableData}  //表格数据源
				columns={tableColumn}   //数据数组，也就是表格的列名
				rowSelection={{
					type: 'radio',   //指定为单选按钮
					onChange: (selectedRowKeys, selectedRows: any) => {
						// console.log("selectRowKeys>>>", selectedRowKeys);  //获取发生改变行的id
						// console.log("selectedRows>>>>", selectedRows); //获取发生改变行的所有字段值
						setRowKey(selectedRows)
						notification.info({
							message: '订单信息',
							description: `
							订单编号：${selectedRows[0].id}<br />
							开始时间：${selectedRows[0].start_time}<br />
							结束时间：${selectedRows[0].end_time}
							 `
						})
					}
				}}

			/>
		</Card>
		<Card title="带有多选按钮的表格	">
			<Table
				dataSource={tableData}  //表格数据源
				columns={tableColumn}   //数据数组，也就是表格的列名
				rowSelection={{
					type: 'checkbox',
					selectedRowKeys: mutiKey,
					onChange: (selectkeys, selectRows) => {
						console.log("selectkeys>>>", selectkeys);
						console.log("selectRows>>>", selectRows);
						setMuti(selectkeys)
					}
				}}
			/>
		</Card>
	</div>;
};

export default BasicPage;