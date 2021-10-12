import * as React from 'react';
import { Card, Button, Table, Form, message } from 'antd';
import UserFilterForm from './components/UserFilterForm';
import { ColumnProps, TableRowSelection } from 'antd/es/table';
import pro_axios from '@/Utils/axios';
import './style.less';

/*
		/user/list 员工列表
		/user/edit 编辑员工
		/user/delete 删除员工
		/user/add 添加员工
*/

interface IUserPageProps {}

const UserPage: React.FunctionComponent<IUserPageProps> = (props) => {
  const [tableData, setTable] = React.useState<any[]>([]);

  //定义用户在表格上选定的键
  const [tableKey, setKey] = React.useState<string[] | number[]>([]);

  //定义用户在表格上选择的行
  const [tableRow, setRow] = React.useState<object[]>([]);

  const columns: ColumnProps<{}>[] = [
    {
      title: '用户ID',
      dataIndex: 'id',
    },
    {
      title: '用户姓名',
      dataIndex: 'username',
    },
    {
      title: '用户性别',
      dataIndex: 'sex',
      render: (sex) => {
        return sex == 1 ? '男' : '女';
      },
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      render: (state) => {
        return {
          '1': '资深工程师',
          '2': '高级工程师',
          '3': '中级工程师',
          '4': '产品经理',
          '5': 'UI',
        }[state];
      },
    },
    {
      title: '爱好',
      dataIndex: 'interest',
      render: (state) => {
        return {
          '1': '打篮球',
          '2': '踢足球',
          '3': '烹饪',
          '4': '健身',
          '5': '音乐',
          '6': '玩耍',
          '7': '运动',
          '8': '台球',
        }[state];
      },
    },
    {
      title: '生日',
      dataIndex: 'birthday',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '入职时间',
      dataIndex: 'time',
    },
  ];

  //componentDidMount
  React.useEffect(() => {
    requestList();
  }, []);

  //请求员工数据信息
  const requestList = async (params?: any) => {
    try {
      let data: any = await pro_axios.axios({
        url: '/user/list',
        data: {
          params,
        },
      });
      data = data.result.item_list;
      data.map((item: any, index: number) => {
        item.key = index;
      });
      setTable(data);
    } catch (e: any) {
      message.info(e.message);
    }
  };

  //定义表格选定列的类型
  const rowSelection: TableRowSelection<{}> = {
    type: 'radio',
    onChange: (selectKey, selectRow) => {
      setRow(selectRow);
      setKey(selectKey);
    },
  };

  return (
    <div className="UserPage">
      <Card>
        {/* 表单 */}
        <UserFilterForm />
      </Card>

      <Card>
        {/* 按钮 */}
        <div className="card-wrapper">
          <Button icon="plus" type="primary">
            创建员工
          </Button>
          <Button icon="edit" type="primary">
            编辑员工
          </Button>
          <Button icon="" type="primary">
            员工详情
          </Button>
          <Button icon="delete" type="danger">
            删除员工
          </Button>
        </div>
      </Card>

      <Card>
        {/* 表格 */}
        <Table
          columns={columns}
          dataSource={tableData}
          rowSelection={rowSelection}
          onRow={(selectRow, selectKey) => {
            return {
              onClick: () => {
                setKey([selectKey]);
                setRow([selectRow]);
              },
            };
          }}
        />
      </Card>
    </div>
  );
};

export default UserPage;
