import * as React from 'react';
import './pages.less'

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
	return <div className="Homepage">
		<div className="mainer">欢迎来到猛蹬 125 管理系统平台</div>
	</div>;
};

export default HomePage;
