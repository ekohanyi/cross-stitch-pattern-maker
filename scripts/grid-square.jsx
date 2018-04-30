import React from 'react';

export default class GridSquare extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: '#fff',
			selectedColor: '' 
		}

		this.onCellClick = this.onCellClick.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextState.color === this.state.color)
			return false;
		else
			return true;
	}

	componentWillReceiveProps(nextProps) { 
		if(nextProps.selectedColor !== this.props.selectedColor)
			this.setState({ selectedColor: nextProps.selectedColor })
	}

	onCellClick() {
		let { color, selectedColor } = this.state;

		this.setState({ color: (color === '#fff' ? selectedColor : '#fff') });
	}

	render() {
		return (
			<div 
				className="cell" 
				style={{backgroundColor: (this.state.color ? this.state.color : '#fff')}}
				onClick={() => this.onCellClick()}
			>
			</div>);
	}
}
