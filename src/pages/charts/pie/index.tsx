import * as React from 'react';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
import { Card } from 'antd';

interface IPiepageProps { }

const Piepage: React.FunctionComponent<IPiepageProps> = props => {

	//componentDidMount生命周期钩子函数
	React.useEffect(() => {

		//基于准备好的dom，初始化echarts实例
		let chartDom1 = document.getElementById('main1')!;
		let chartDom2 = document.getElementById('main2')!;
		let chartDom3 = document.getElementById('main3')!;
		let myChart1 = echarts.init(chartDom1);
		let myChart2 = echarts.init(chartDom2);
		let myChart3 = echarts.init(chartDom3);
		let option1: EChartsOption;
		let option2: EChartsOption;
		let option3: EChartsOption;

		option1 = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				top: '5%',
				left: 'center'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: ['40%', '70%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							fontSize: '40',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: [
						{ value: 1048, name: 'Search Engine' },
						{ value: 735, name: 'Direct' },
						{ value: 580, name: 'Email' },
						{ value: 484, name: 'Union Ads' },
						{ value: 300, name: 'Video Ads' }
					]
				}
			]
		};

		option2 = {
			legend: {
				top: 'bottom'
			},
			toolbox: {
				show: true,
				feature: {
					mark: { show: true },
					dataView: { show: true, readOnly: false },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			series: [
				{
					name: 'Nightingale Chart',
					type: 'pie',
					radius: [50, 250],
					center: ['50%', '50%'],
					roseType: 'area',
					itemStyle: {
						borderRadius: 8
					},
					data: [
						{ value: 40, name: 'rose 1' },
						{ value: 38, name: 'rose 2' },
						{ value: 32, name: 'rose 3' },
						{ value: 30, name: 'rose 4' },
						{ value: 28, name: 'rose 5' },
						{ value: 26, name: 'rose 6' },
						{ value: 22, name: 'rose 7' },
						{ value: 18, name: 'rose 8' }
					]
				}
			]
		}

		option3 = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				top: '5%',
				left: 'center'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: ['40%', '70%'],
					avoidLabelOverlap: false,
					itemStyle: {
						borderRadius: 10,
						borderColor: '#fff',
						borderWidth: 2
					},
					label: {
						show: false,
						position: 'center'
					},
					emphasis: {
						label: {
							show: true,
							fontSize: '40',
							fontWeight: 'bold'
						}
					},
					labelLine: {
						show: false
					},
					data: [
						{ value: 1048, name: 'Search Engine' },
						{ value: 735, name: 'Direct' },
						{ value: 580, name: 'Email' },
						{ value: 484, name: 'Union Ads' },
						{ value: 300, name: 'Video Ads' }
					]
				}
			]
		}

		// 绘制图表
		myChart1.setOption(option1)
		myChart2.setOption(option2)
		myChart3.setOption(option3)
	}, [])

	return (
		<div className="Barpage">
			<Card title="环形图" >
				<div id="main1" style={{ height: 350, width: 700, textAlign: 'center' }}></div>
			</Card>
			<Card title="基础南丁格尔玫瑰图">
				<div id="main2" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
			</Card>
			<Card title="圆角环形图">
				<div id="main3" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
			</Card>
		</div>
	);
};

export default Piepage;
