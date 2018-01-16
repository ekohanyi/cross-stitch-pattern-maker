import React from 'react';
import Grid from './grid.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 10,
			error: ''
		}

		this.inputChanged = this.inputChanged.bind(this);
	}

	inputChanged() {
		if(parseInt(this.gridSizeInput.value) > 60) {
			this.setState({ error: "Please enter an integer less than 60." });
		}
		else {
			this.setState({ size: this.gridSizeInput.value, error: "" });
		}
	}

	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<input 
					onChange={() => this.inputChanged()} 
					ref={input => { this.gridSizeInput = input }}
					value={this.state.size}
					disabled
				/>
				{this.state.error ? <div className="error">{this.state.error}</div> : ''}
				<Grid size={this.state.size} />
			</div>);
	}
}