//数据模拟接口网址：https://fastmock.site/
import axios from 'axios'
import { Modal, message } from 'antd'

//引入typescript的接口
interface ajaxOption {
	url: string,
	isMock?: boolean;
	data?: {
		params?: any;
		isLoading?: boolean
	}
}

export default {
	axios(option: ajaxOption) {
		let loading: any = document.getElementById("ajaxLoading");
		let baseUrl: string;

		//判断isMock，如果为true，就使用Mock测试接口，如果为false就使用真实接口
		if (!option.isMock) {
			//使用mock服务器，使用假数据来进行数据操作
			baseUrl = 'https://www.fastmock.site/mock/f6da1c3db04977b7cb8c948967e1c050/bikesmfl';
		} else {
			baseUrl = 'https://www.fastmock.site/mock/f6da1c3db04977b7cb8c948967e1c050/';
		}

		//控制Loading加载效果显示和隐藏
		if (option.data && option.data.isLoading) {
			loading.style.display = 'none';
		} else {
			loading.style.display = 'block'
		}

		return new Promise((resolve, reject) => {
			axios({
				url: option.url,
				baseURL: baseUrl,
				timeout: 10000,
				method: 'GET',
				params: (option.data && option.data.params) || "",
			})
				.then(response => {
					//判断一下当前请求状态码
					let res: any = response.data;
					if (response.status == 200) {
						if (res.code == 200) {
							resolve(res)
						} else {
							Modal.info({
								title: '出现了一点问题',
								content: res.message || '出现了问题，对面的服务器小姐姐要睡觉啦'
							})
						}
					} else {
						reject(response.data)
					}
				})
				.catch(err => {
					message.info('出现网络连接问题，错误状态：' + err.message)
				})
				.finally(() => {
					loading.style.display = 'none';
				})
		})
	}
}