import React, { useState } from 'react';
import { Card, Button, Radio } from 'antd'
import "../pages.less"

const ButtonGroup = Button.Group

interface IButtonPageProps {
}

const ButtonPage: React.FunctionComponent<IButtonPageProps> = (props) => {

	//判断按钮是否加载loading
	const [btn_loading, setLoading] = useState<boolean>(false)
	//判断按钮大小
	const [btn_size, setSize] = useState<"large" | "small" | "default" | undefined>("default")

	return <div className="ButtonPage">
		<Card
			title="基础按钮"
		>
			<div className="card-content">
				<Button type="primary">按钮Primary</Button>
				<Button type="default">默认按钮</Button>
				<Button type="dashed">按钮Dashed</Button>
				<Button type="danger">按钮Danger</Button>
				<Button type="link">按钮Link</Button>
			</div>
		</Card>

		<Card
			title="带图标的按钮"
		>
			<div className="card-content">
				<Button type="primary" icon="download">下载按钮</Button>
				<Button type="default" icon="search">搜索按钮</Button>
				<Button type="dashed" icon="edit">编辑按钮</Button>
				<Button type="danger" icon="delete">删除按钮</Button>
				<Button type="primary" icon="play-circle">视频播放</Button>
			</div>
		</Card>

		<Card
			title="加载按钮"
		>
			<div className="card-content">
				<Button type="primary" loading>
					Loading
				</Button>
				<Button type="primary" size="small" loading>
					Loading
				</Button>
				<br />
				<Button type="primary" loading={btn_loading} onClick={() => setLoading(!btn_loading)}>
					Click me!
				</Button>
				<Button
					type="primary"
					icon="poweroff"
					loading={btn_loading}
				>
					Click me!
				</Button>
				<br />
				<Button type="primary" loading />
				<Button type="primary" shape="circle" loading />
				<Button type="danger" shape="round" loading={btn_loading} />
			</div>
		</Card>

		<Card
			title="按钮大小尺寸"
		>
			<div className="card-content">
				<ButtonGroup >
					<Button onClick={() => setSize("large")}>Large</Button>
					<Button onClick={() => setSize("default")}>Default</Button>
					<Button onClick={() => setSize("small")}>Small</Button>
				</ButtonGroup>
				
				<Button size={btn_size} type="primary">按钮Primary</Button>
				<Button size={btn_size} type="default">默认按钮</Button>
				<Button size={btn_size} type="dashed">按钮Dashed</Button>
				<Button size={btn_size} type="danger">按钮Danger</Button>
				<Button size={btn_size} type="link">按钮Link</Button>
			</div>
		</Card>
	</div>;
};

export default ButtonPage;
