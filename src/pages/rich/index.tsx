import * as React from 'react';
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//引入操作富文本组件的api
import { EditorState } from 'draft-js'

//引入富文本转换为html的api
import draftjs from 'draftjs-to-html'

interface IRichPageProps {
}

const RichPage: React.FunctionComponent<IRichPageProps> = (props) => {

	const [contentState, setContentState] = React.useState<any>("")

	const [visible, setVisible] = React.useState<boolean>(false);

	const [editorState, setEditState] = React.useState(EditorState.createEmpty());

	//查看富文本编辑器内容信息
	const handleRichShow = () => {
		if(contentState) return;
		setVisible(true)
	}

	//清空富文本编辑器内容信息
	const handleRichClear = () => {
		setEditState(EditorState.createEmpty());
		setContentState("")
	}

	return <div className="RichPage">
		<Card>
			<div className="card-content">
				<Button type="primary" onClick={handleRichShow}>获取HTML文本内容</Button>
				<Button type="primary" onClick={handleRichClear}>清空内容</Button>
			</div>
		</Card>
		<Card title="富文本编辑器">
			<Editor
				editorState={editorState}
				onEditorStateChange={(editorState) => {
					setEditState(editorState)
				}}
				onContentStateChange={(contentState: any) => {
					setContentState(contentState)
				}}
			/>
		</Card>
		<Modal
			visible={visible}
			onCancel={() => {
				setVisible(false)
			}}
		>
			{
				draftjs(contentState)
			}
		</Modal>
	</div >;
};

export default RichPage;
