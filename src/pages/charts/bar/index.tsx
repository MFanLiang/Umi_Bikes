import * as React from 'react';
type EChartsOption = echarts.EChartsOption;
import * as echarts from 'echarts';
import { Card } from 'antd';

interface IBarPageProps {
}

const BarPage: React.FunctionComponent<IBarPageProps> = (props) => {

	React.useEffect(() => {

		//基于准备好的dom，初始化echarts实例
		let chartDom1 = document.getElementById('main1')!;
		let chartDom2 = document.getElementById('main2')!;
		let chartDom3 = document.getElementById('main3')!;
		let chartDom4 = document.getElementById('main4')!;
		let chartDom5 = document.getElementById('main5')!;
		let chartDom6 = document.getElementById('main6')!;
		let myChart1 = echarts.init(chartDom1);
		let myChart2 = echarts.init(chartDom2);
		let myChart3 = echarts.init(chartDom3);
		let myChart4 = echarts.init(chartDom4);
		let myChart5 = echarts.init(chartDom5);
		let myChart6 = echarts.init(chartDom6);
		let option1: EChartsOption;
		let option2: EChartsOption;
		let option3: EChartsOption;
		let option4: EChartsOption;
		let option5: EChartsOption;
		let option6: EChartsOption;

		option1 = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: 'bar'
				}
			]
		};

		option2 = {
			title: [
				{
					text: '单车资料'
				}
			],
			polar: {
				radius: [30, '80%']
			},
			angleAxis: {
				max: 4,
				startAngle: 75
			},
			radiusAxis: {
				type: 'category',
				data: ['a', 'b', 'c', 'd']
			},
			tooltip: {},
			series: {
				type: 'bar',
				data: [2, 1.2, 2.4, 3.6],
				coordinateSystem: 'polar',
				label: {
					show: true,
					position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
					formatter: '{b}: {c}'
				}
			}
		}

		option3 = {
			title: [
				{
					text: 'Radial Polar Bar Label Position (middle)'
				}
			],
			polar: {
				radius: [30, '80%']
			},
			radiusAxis: {
				max: 4
			},
			angleAxis: {
				type: 'category',
				data: ['a', 'b', 'c', 'd'],
				startAngle: 75
			},
			tooltip: {},
			series: {
				type: 'bar',
				data: [2, 1.2, 2.4, 3.6],
				coordinateSystem: 'polar',
				label: {
					show: true,
					position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
					formatter: '{b}: {c}'
				}
			},
			backgroundColor: '#fff',
			animation: false
		}

		option4 = {
			title: {
				text: 'Waterfall Chart',
				subtext: 'Living Expenses in Shenzhen'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
				formatter: function (params: any) {
					var tar = params[1];
					return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				splitLine: { show: false },
				data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Placeholder',
					type: 'bar',
					stack: 'Total',
					itemStyle: {
						borderColor: 'transparent',
						color: 'transparent'
					},
					emphasis: {
						itemStyle: {
							borderColor: 'transparent',
							color: 'transparent'
						}
					},
					data: [0, 1700, 1400, 1200, 300, 0]
				},
				{
					name: 'Life Cost',
					type: 'bar',
					stack: 'Total',
					label: {
						show: true,
						position: 'inside'
					},
					data: [2900, 1200, 300, 200, 900, 300]
				}
			]
		}

		const data: number[] = [];
		for (let i = 0; i < 5; ++i) {
			data.push(Math.round(Math.random() * 200));
		}
		option5 = {
			xAxis: {
				max: 'dataMax'
			},
			yAxis: {
				type: 'category',
				data: ['A', 'B', 'C', 'D', 'E'],
				inverse: true,
				animationDuration: 300,
				animationDurationUpdate: 300,
				max: 2 // only the largest 3 bars will be displayed
			},
			series: [
				{
					realtimeSort: true,
					name: 'X',
					type: 'bar',
					data: data,
					label: {
						show: true,
						position: 'right',
						valueAnimation: true
					}
				}
			],
			legend: {
				show: true
			},
			animationDuration: 0,
			animationDurationUpdate: 3000,
			animationEasing: 'linear',
			animationEasingUpdate: 'linear'
		}
		function run() {
			for (var i = 0; i < data.length; ++i) {
				if (Math.random() > 0.9) {
					data[i] += Math.round(Math.random() * 2000);
				} else {
					data[i] += Math.round(Math.random() * 200);
				}
			}
			myChart5.setOption<echarts.EChartsOption>({
				series: [
					{
						type: 'bar',
						data
					}
				]
			});
		}
		setTimeout(function () {
			run();
		}, 0);
		setInterval(function () {
			run();
		}, 3000);

		option6 = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			toolbox: {
				feature: {
					dataView: { show: true, readOnly: false },
					magicType: { show: true, type: ['line', 'bar'] },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			legend: {
				data: ['Evaporation', 'Precipitation', 'Temperature']
			},
			xAxis: [
				{
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisPointer: {
						type: 'shadow'
					}
				}
			],
			yAxis: [
				{
					type: 'value',
					name: 'Precipitation',
					min: 0,
					max: 250,
					interval: 50,
					axisLabel: {
						formatter: '{value} ml'
					}
				},
				{
					type: 'value',
					name: 'Temperature',
					min: 0,
					max: 25,
					interval: 5,
					axisLabel: {
						formatter: '{value} °C'
					}
				}
			],
			series: [
				{
					name: 'Evaporation',
					type: 'bar',
					data: [
						2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
					]
				},
				{
					name: 'Precipitation',
					type: 'bar',
					data: [
						2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
					]
				},
				{
					name: 'Temperature',
					type: 'line',
					yAxisIndex: 1,
					data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]
		}

		// 绘制图表
		myChart1.setOption(option1)
		myChart2.setOption(option2)
		myChart3.setOption(option3)
		myChart4.setOption(option4)
		myChart5.setOption(option5)
		myChart6.setOption(option6)
	}, [])

	return <div className="BarPage">
		<Card title="基础柱状图" >
			<div id="main1" style={{ height: 350, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="极坐标柱状图标签">
			<div id="main2" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="极坐标柱状图标签">
			<div id="main3" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="瀑布图（柱状图模拟）">
			<div id="main4" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="动态排序柱状图">
			<div id="main5" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
		<Card title="折柱混合">
			<div id="main6" style={{ height: 500, width: 700, textAlign: 'center' }}></div>
		</Card>
	</div>;
};

export default BarPage;
