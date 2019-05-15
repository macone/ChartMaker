import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {button, Container, Row ,Col} from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


export default class LineChart extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
				chartData : {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','November'],
					datasets: [
						{
							label: 'test',
							fill: false,
							lineTension: 0.1,
							backgroundColor: 'rgba(75,192,192,0.4)',
							borderColor: this.props.borderColor,
							borderCapStyle: 'butt',
							borderDash: [],
							borderDashOffset: 0.0,
							borderJoinStyle: 'miter',
							pointBorderColor: ['#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0'],
							pointBackgroundColor: this.props.pointBgColor,
							pointBorderWidth: 1,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: 'rgba(75,192,192,1)',
							pointHoverBorderColor: 'rgba(220,220,220,1)',
							pointHoverBorderWidth: 9,
							pointRadius: 5,
							pointHitRadius: 10,
							data: this.props.dataNum,
						}
					]}
			}
		}

	static getDerivedStateFromProps(state,props){
		props.chartData.datasets[0].data = state.dataNum,
		props.chartData.datasets[0].borderColor = state.borderColor,
		props.chartData.datasets[0].pointBackgroundColor = state.pointBgColor
		props.chartData.labels = state.label
		props.chartData.datasets[0].pointBorderColor = state.pointBorColor
	}
	render() {


		console.log('render chart')
		console.log(this.state.chartData)
			return (
			<div>
				<Line ref="chart" data={this.state.chartData} />
			</div>
			)
	}

	componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
  }
}