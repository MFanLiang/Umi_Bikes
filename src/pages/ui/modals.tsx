import React, { useState } from 'react';
import { Card, Button, Modal, Icon } from 'antd'
import "../pages.less"

interface IModalPageProps {
}

const ModalPage: React.FunctionComponent<IModalPageProps> = (props) => {

	const [modalVisible, setVisible] = useState({
		modal01: false,
		modal02: false,
		modal03: false,
		modal04: false
	})

	let { modal01, modal02, modal03, modal04 } = modalVisible

	//控制模态框开启的函数
	let handleOpen = (modalName: "modal01" | "modal02" | "modal03" | "modal04") => {
		let config = {
			modal01: false,
			modal02: false,
			modal03: false,
			modal04: false
		}
		config[modalName] = true
		setVisible(config)
	}

	//控制模态框关闭的函数
	let handleClose = (modalName: "modal01" | "modal02" | "modal03" | "modal04") => {
		let config = {
			modal01: false,
			modal02: false,
			modal03: false,
			modal04: false
		}
		config[modalName]
		setVisible(config)
	}

	return <div className="ModalPage">
		<Card
			title="基础按钮"
		>
			<div className="card-content">
				<Button type="primary" onClick={() => handleOpen("modal01")}>Open Modal</Button>
				<Button type="primary" onClick={() => handleOpen("modal02")}>没有页脚的模态框</Button>
				<Button type="primary" onClick={() => handleOpen("modal03")}>自定义模态框</Button>
				<Button type="primary">按钮Danger</Button>

				<Modal
					title="基础对话框"
					visible={modal01}
					onCancel={() => handleClose("modal01")}
				>
					<p>Some contents</p>
					<p>Some contents</p>
					<p>Some contents</p>
					<p>Some contents</p>
					<p>Some contents</p>
				</Modal>

				<Modal
					title="没有页脚的对话框"
					visible={modal02}
					onCancel={() => handleClose("modal02")}
					footer={null}
				>
					<p>Some contents</p>
					<p>Some contents</p>
				</Modal>

				<Modal
					title="自定义的对话框"
					visible={modal03}
					onCancel={() => handleClose("modal03")}
					cancelText="算了吧"
					closeIcon={<Icon type="close-circle" />}
					okText="带你一疯玩"
				>
					<p>Some contents</p>
					<p>Some contents</p>
				</Modal>
			</div>
		</Card>
	</div>;
};

export default ModalPage;
