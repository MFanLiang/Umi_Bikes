import { EventEmitter } from 'events'

export default class event {
	private static eve = new EventEmitter();

	//绑定事件
	static eve_on(eventName: string, func: any) {
		this.eve.on(eventName, func)
	}

	//触发事件
	static eve_emit(eventName: string, arg?: any) {
		this.eve.emit(eventName, arg)
	}
}