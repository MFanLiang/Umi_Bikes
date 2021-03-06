import * as React from 'react';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
import { Card } from 'antd';

interface ILinePageProps {
}

const LinePage: React.FunctionComponent<ILinePageProps> = (props) => {

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
			title: {
				text: '蜂窝骑士'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Email',
					type: 'line',
					stack: 'Total',
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: 'Union Ads',
					type: 'line',
					stack: 'Total',
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: 'Video Ads',
					type: 'line',
					stack: 'Total',
					data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
					name: 'Direct',
					type: 'line',
					stack: 'Total',
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: 'Search Engine',
					type: 'line',
					stack: 'Total',
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		};

		option2 = {
			title: {
				text: '用户骑行计划'
			},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					smooth: true
				}
			]
		}

		option3 = {
			title: {
				text: '车辆管理区域控制'
			},
			color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'Line 1',
					type: 'line',
					stack: 'Total',
					smooth: true,
					lineStyle: {
						width: 0
					},
					showSymbol: false,
					areaStyle: {
						opacity: 0.8,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(128, 255, 165)'
							},
							{
								offset: 1,
								color: 'rgba(1, 191, 236)'
							}
						])
					},
					emphasis: {
						focus: 'series'
					},
					data: [140, 232, 101, 264, 90, 340, 250]
				},
				{
					name: 'Line 2',
					type: 'line',
					stack: 'Total',
					smooth: true,
					lineStyle: {
						width: 0
					},
					showSymbol: false,
					areaStyle: {
						opacity: 0.8,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(0, 221, 255)'
							},
							{
								offset: 1,
								color: 'rgba(77, 119, 255)'
							}
						])
					},
					emphasis: {
						focus: 'series'
					},
					data: [120, 282, 111, 234, 220, 340, 310]
				},
				{
					name: 'Line 3',
					type: 'line',
					stack: 'Total',
					smooth: true,
					lineStyle: {
						width: 0
					},
					showSymbol: false,
					areaStyle: {
						opacity: 0.8,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(55, 162, 255)'
							},
							{
								offset: 1,
								color: 'rgba(116, 21, 219)'
							}
						])
					},
					emphasis: {
						focus: 'series'
					},
					data: [320, 132, 201, 334, 190, 130, 220]
				},
				{
					name: 'Line 4',
					type: 'line',
					stack: 'Total',
					smooth: true,
					lineStyle: {
						width: 0
					},
					showSymbol: false,
					areaStyle: {
						opacity: 0.8,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(255, 0, 135)'
							},
							{
								offset: 1,
								color: 'rgba(135, 0, 157)'
							}
						])
					},
					emphasis: {
						focus: 'series'
					},
					data: [220, 402, 231, 134, 190, 230, 120]
				},
				{
					name: 'Line 5',
					type: 'line',
					stack: 'Total',
					smooth: true,
					lineStyle: {
						width: 0
					},
					showSymbol: false,
					label: {
						show: true,
						position: 'top'
					},
					areaStyle: {
						opacity: 0.8,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: 'rgba(255, 191, 0)'
							},
							{
								offset: 1,
								color: 'rgba(224, 62, 76)'
							}
						])
					},
					emphasis: {
						focus: 'series'
					},
					data: [220, 302, 181, 234, 210, 290, 150]
				}
			]
		}

		// 绘制图表
		myChart1.setOption(option1)
		myChart2.setOption(option2)
		myChart3.setOption(option3)
	}, [])

	return <div className="Barpage">
		<Card title="折线图堆叠" >
			<div id="main1" style={{ height: 350, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="基础平滑折线图">
			<div id="main2" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="渐变堆叠面积图">
			<div id="main3" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
	</div>;
};

export default LinePage;
