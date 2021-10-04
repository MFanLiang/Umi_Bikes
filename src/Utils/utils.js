// 项目所需所有的公共机制函数

import React from 'react'

export default {
	formDate(time) {
		if (!time) return ''; // 判断如果没有时间传入，则直接返回空，中断当前运行
		let date = new Date(time)
		let Hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
		let Minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
		let Seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ' ' + Hours + ":" + Minutes + ":" + Seconds
	}
}