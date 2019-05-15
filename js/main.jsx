import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './mainView.jsx';


class App extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
			return (
					<MainView />
			)
	}
}


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
			<App/>,
			document.getElementById('app')
	)
})