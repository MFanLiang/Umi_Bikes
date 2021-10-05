import * as React from 'react';
import { Layout } from 'antd'
import NavLeft from '@/component/NavLeft';
import NavHeader from '@/component/NavHeader';

const { Content, Footer, Sider } = Layout;

interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
	return <Layout className="_layout">
		{/* Sider：设置左侧边栏的布局样式 */}
		<Sider
			style={{ height: '100vh' }}
			width={200}
			breakpoint={'lg'} //触发响应布局时的断点
			collapsedWidth={0}  //设置收缩宽度为0
		>
			<NavLeft></NavLeft>
		</Sider>

		<Content style={{ maxHeight: '100vh', overflow: 'scroll' }}>
			<NavHeader />
			<Content style={{ minHeight: "60vh", margin: "12px" }}>
				{/* props.children是指：根据路由加载的不同页面，在其显示不同的组件 比如切换到home页面，此时就是/home；切换到主页面，此时就是/ */}
				{props.children}
			</Content>
			<Footer style={{ textAlign: "center", color: "#ccc" }}>建议使用Chrome浏览器打开，拥有更好的体验 &copy; MengFanLiang All Right Remain.</Footer>
		</Content>
	</Layout>;
};

export default _layout;
