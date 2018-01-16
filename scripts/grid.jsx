import React from 'react';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gridSize: props.size
		};

		this.renderRow = this.renderRow.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.size !== this.state.gridSize) {
			this.setState({ gridSize: nextProps.size })
		}
	}

	renderRow() {
		let { gridSize } = this.state;
		var gridRows = [];

		for(var i = 0; i < gridSize; i++) {
			var row = [];

			for(var j = 0; j < gridSize; j++){
				row.push(<GridSquare key={'row_' + i + '_cell_' + j}/>);
			}
			gridRows.push(<GridRow key={'row_' + i} children={row} />)
		}

		return gridRows;
	}

	render() {
		var row = this.renderRow();
		return (<div className="grid-container">{row}</div>);
	}
}

function GridRow(props) {
  return (<div className={'row cf'}>{props.children}</div>);
}

class GridSquare extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: '#fff'
		}

		this.onCellClick = this.onCellClick.bind(this);
	}

	onCellClick() {
		let { color } = this.state;

		this.setState({ color: (color === '#fff' ? '#000' : '#fff') });
	}

	render() {
		return (
			<div 
				className="cell" 
				style={{backgroundColor: this.state.color}}
				onClick={() => this.onCellClick()}
			>
			</div>);
	}
}
