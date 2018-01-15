/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Emma"
		}
	}
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>{this.state.name}</h1>
			</div>);
	}
}