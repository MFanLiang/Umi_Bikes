import * as React from 'react';
import { NavLink } from 'umi'
import { Layout } from 'antd'
import mflSysTime from '@/Utils/utils'
import './style.less'

const { Header } = Layout;

interface INavHeaderProps {

}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
	const username = "小猪佩奇"

	const [sysTime, setSysTime] = React.useState<string>("")

	//componentDidMount && componentWillUnmount
	//设定页面头部的系统时间
	React.useEffect(() => {
		let timer = setInterval(() => {
			setSysTime(mflSysTime.formDate(new Date().getTime()))
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	})

	return <div className="NavHeader">
		<Header style={{ background: "#ffffff", textAlign: "right" }}>
			<span className="sysTimes">{sysTime}</span>
			<span style={{ marginRight: 10 }}>欢迎你 {username}</span>
			<NavLink to={"/logout"}>退出账户</NavLink>
		</Header>
		<div className="header_bottom">
			<div className="pagetitle">首页</div>
		</div>
	</div>;
};

export default NavHeader;