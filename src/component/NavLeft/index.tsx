import React, { useEffect } from 'react'
import { NavLink } from 'umi'
import { Menu } from 'antd'
import menuConfig, { menuItem } from './menuConfig'
import './style.less'

const { Item, SubMenu } = Menu

interface INavLeftProps {
}

const NavLeft: React.FunctionComponent<INavLeftProps> = (props) => {

	//使用hooks里面的useEffect副作用，相当于类组件里面的componentDidMount生命周期钩子，仅在componentDidMount时渲染rander
	useEffect(() => {
		// console.log("menuConfig", menuConfig);
	}, [])

	//菜单栏的渲染
	let renderMenu = (data: Array<menuItem>) => {
		return data.map((item) => {
			if (item.children) { //判断item是否有子菜单项，如果有子菜单项，就进行递归遍历
				return <SubMenu title={item.title} key={item.key}>
					{renderMenu(item.children)}
				</SubMenu>
			} else {
				return <Item title={item.title} key={item.key}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</Item>
			}
		})
	}

	return <div className="NavLeft">
		<div className="Icon">
			<img src="./../../../asset/logo-ant.svg" alt="" />
			<h1>单车蹬起来</h1>
		</div>
		<Menu theme={'dark'} >
			{renderMenu(menuConfig)}
		</Menu>
	</div>;
};

export default NavLeft;
