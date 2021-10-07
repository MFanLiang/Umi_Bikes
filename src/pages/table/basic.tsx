import * as React from 'react';
import { Button } from 'antd'
import pro_axios from '@/utils/axios'

interface IBasicPageProps {
}

const BasicPage: React.FunctionComponent<IBasicPageProps> = (props) => {

	const handleSubmit = () => {
		pro_axios.axios({
			url: '/order/list'
		})
		.then((response) => {
			console.log("你就是这么的美丽动人：", response);
			
		})
	}

	return <div className="BasicPage">
		<Button onClick={() => handleSubmit()}>点击按钮获取接口异步数据</Button>
	</div>;
};

export default BasicPage;
