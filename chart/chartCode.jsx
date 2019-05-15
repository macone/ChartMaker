
import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class ChartCode extends React.Component {
	constructor(props) {
			super(props)
		}
		render() {
			return (
			<div class="code-box">
				<pre>
					<code>
					<p class="code"> &lt;div style="width:1300px; height: 800px"&gt;</p>
					<p class="code">&lt;canvas id="myChart" width="1300" height="800"&gt;&lt;/canvas&gt;</p>
					<p class="code"> &lt;div&gt;</p>
					<p class="code">&lt;script&gt;</p>
					<p class="code">var ctx = document.getElementById('myChart').getContext('2d');</p>

					<p class="code">var myChart = new Chart(ctx, 	&#123;</p>
						<p class="code">  type: 'line',</p>
						<p class="code">		data :&#123;</p> 
						<p class="code tab1">		  labels: [{this.props.label.map((val, ind) => {	return ("'"+val+"'"+",")})}],</p>
						<p class="code tab1">		  datasets: [&#123;</p> 
								
							<p class="code tab2">					label: 'your chart',</p> 
							<p class="code tab2">					fill: false,</p> 
							<p class="code tab2">					lineTension: 0.1,</p> 
							<p class="code tab2">					backgroundColor: 'rgba(75,192,192,0.4)',</p> 
							<p class="code tab2">					borderColor: "{this.props.borderColor}",</p> 
							<p class="code tab2">					borderCapStyle: 'butt',</p> 
							<p class="code tab2">					borderDash: [],</p> 
							<p class="code tab2">					borderDashOffset: 0.0,</p> 
							<p class="code tab2">					borderJoinStyle: 'miter',</p> 
							<p class="code tab2">					pointBorderColor: [{this.props.pointBorColor.map((val, ind) => {	return ("'"+val+"'"+",")})}],</p> 
							<p class="code tab2">					pointBackgroundColor: [{this.props.pointBgColor.map((val, ind) => {	return ("'"+val+"'"+",")})}],</p>
							<p class="code tab2">					pointBorderWidth: 1,</p> 
							<p class="code tab2">					pointHoverRadius: 5,</p> 
							<p class="code tab2">					pointHoverBackgroundColor: 'rgba(75,192,192,1)',</p> 
							<p class="code tab2">					pointHoverBorderColor: 'rgba(220,220,220,1)',</p> 
							<p class="code tab2">					pointHoverBorderWidth: 9,</p> 
							<p class="code tab2">					pointRadius: 5,</p> 
							<p class="code tab2">					pointHitRadius: 10,</p> 
							<p class="code tab2">					data: [{this.props.dataNum.map((val, ind) => {	return ("'"+val+"'"+",")})}]</p>
							<p class="code">  		&#125;]</p>
							<p class="code">  		&#125;</p>
							<p class="code">  		&#125;)</p>
							<p class="code">&lt;/script&gt;</p>
					</code>
				</pre>
			</div>
			)
	}
}