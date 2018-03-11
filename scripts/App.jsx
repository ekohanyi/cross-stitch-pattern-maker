import React from 'react';
import Grid from './grid.jsx';
import ColorPicker from './colorpicker.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 10,
			error: '',
			selectedColor: "#fff"
		}

		this.inputChanged = this.inputChanged.bind(this);
		this.colorChanged = this.colorChanged.bind(this);
	}

	inputChanged() {
		if(parseInt(this.gridSizeInput.value) > 60) {
			this.setState({ error: "Please enter an integer less than 60." });
		}
		else {
			this.setState({ size: this.gridSizeInput.value, error: "" });
		}
	}

	colorChanged(color) {
		this.setState({ selectedColor: color })
	}

	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<input 
					className='size-input'
					onChange={() => this.inputChanged()} 
					ref={input => { this.gridSizeInput = input }}
					value={this.state.size}
					disabled
				/>
				{this.state.error ? <div className="error">{this.state.error}</div> : ''}
				<ColorPicker onColorChange={(color) => this.colorChanged(color)} currentColor={this.state.selectedColor}/>
				<Grid size={this.state.size} color={this.state.selectedColor}/>
			</div>);
	}
}