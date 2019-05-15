import React from 'react';
import ReactDOM from 'react-dom';
import {button, Container, Row ,Col} from 'react-bootstrap';
import LineChart from '../chart/chart.jsx';
import ChartCode from '../chart/chartCode.jsx'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
require('../css/main.scss');

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

let dataTemp =["","","","","","","","","",""];
let colorTemp =['#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0'];
let emptyColorTemp= ['','','','','','','','','','']
let labelTemp =['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','November']
let bordeColorTemp= ['#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0'];
let emptyBorCol= ['','','','','','','','','','']

export default class MainView extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
				colNum: 0,
				num: [0,0,0,0,0,0,0,0,0,0],
				borderColor:'#4AC0C0',
				pointBgColor: ['#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0'],
				label: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','November'],
				pointBorColor:['#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0','#4AC0C0'],
			};

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
	
		handleChange3 = name => event => {
			this.setState({ [name]: event.target.value });
		};
		colNumber = event => {
			// this.setState({ [name]: event.target.value });
			this.setState({colNum: event.target.value});
			console.log(event.target.value);
		};

		dataChange = event => {
			dataTemp[parseInt(event.target.id.split("-")[1])-1] = Number(event.target.value);
			this.setState({num: Array.from(dataTemp)});
		};

		borderColorChange = event => {
			this.setState({borderColor: event.target.value})
		}

		colorChange = event => {
			colorTemp[parseInt(event.target.id.split("-")[1])-1] = event.target.value;
			emptyColorTemp[parseInt(event.target.id.split("-")[1])-1] = event.target.value;
			this.setState({pointBgColor: Array.from(colorTemp)})

		}
		labelChange = event => {
			labelTemp[parseInt(event.target.id.split("-")[1])-1] = event.target.value;
			this.setState({label: Array.from(labelTemp)})
		}
	
		
		colorBorderChange = event => {
			bordeColorTemp[parseInt(event.target.id.split("-")[1])-1] = event.target.value;
			emptyBorCol[parseInt(event.target.id.split("-")[1])-1] = event.target.value;
			this.setState({pointBorColor: Array.from(bordeColorTemp)})

		}
	
	
		handleChange(event) {
			this.setState({value: event.target.value});
		}
	
		handleSubmit(event) {
			alert('A name was submitted: ' + this.state.value);
			event.preventDefault();
		}
	  handleChange2 = () => {
			this.setState(state => ({ checked: !state.checked }));
		};

	render() {

			return (
					<>
					<div className="container-fluid header">
						<Row>
							<Col>
							<h3>Twój wykres</h3>
							</Col>
						</Row>
					</div>

						<Container>
							<Row>
								<Col>
									<LineChart dataNum={this.state.num} borderColor={this.state.borderColor} pointBgColor={this.state.pointBgColor} label={this.state.label} pointBorColor={this.state.pointBorColor}/>
								</Col>
							</Row>
						</Container>
						<div className="container-fluid header" style={{marginBottom : 0, marginTop : 30+"px", opacity: 0.6}}>
							<Row>
								<Col>
									<h3>Podaj dane</h3>
								</Col>
							</Row>
						</div>
						<div className="bg container-fluid">
							<Container>
							<Row>
								{[1,2,3,4,5,6,7,8,9,10].map((val, ind) => {
									let dataID = "data-" + val;
										return (		
											<Col>
												<TextField
													id={dataID}
													label={"value-"+val}
													value={dataTemp[ind]}
													onChange={this.dataChange}
													margin="normal"
													type="number"
												/>
											</Col>)
										})}
							</Row>
							<Row>
								<Col>
									<TextField
										id="column number"
										label="Choose line color"
										value={this.state.borderColor}
										onChange={this.borderColorChange}
										margin="normal"
										type="text"
									/>
								</Col>
							</Row>
							<Row>
								{[1,2,3,4,5,6,7,8,9,10].map((val, ind) => {
									let colorID = "color-" + val;
										return (		
											<Col>
												<TextField
													id={colorID}
													label={colorID}
													value={emptyColorTemp[ind]}
													onChange={this.colorChange}
													margin="normal"
													type="text"
												/>
											</Col>)
										})}
							</Row>
							<Row>
								{[1,2,3,4,5,6,7,8,9,10].map((val, ind) => {
									let labelID = "label-" + val;
										return (		
											<Col>
												<TextField
													id={labelID}
													label={labelID}
													value={this.state.label[ind]}
													onChange={this.labelChange}
													margin="normal"
													type="text"
												/>
											</Col>)
										})}
							</Row>
							<Row>
								{[1,2,3,4,5,6,7,8,9,10].map((val, ind) => {
									let BorColorID = "border-" + val;
										return (		
											<Col>
												<TextField
													id={BorColorID}
													label={BorColorID}
													value={emptyBorCol[ind]}
													onChange={this.colorBorderChange}
													margin="normal"
													type="text"
												/>
											</Col>)
										})}
							</Row>
						
							
							</Container>
							<Container>
							<Row>
								<Col>
									<ChartCode dataNum={this.state.num} borderColor={this.state.borderColor} pointBgColor={this.state.pointBgColor} label={this.state.label} pointBorColor={this.state.pointBorColor}/>
								</Col>
							</Row>
						</Container>
						</div>
					</>
			)
	}
}