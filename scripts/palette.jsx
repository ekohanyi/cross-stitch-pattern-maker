
import React from 'react';

export default class Palette extends React.Component {
    constructor(props) {
        super(props);
    }

    getColorCircles() {
        let colors = this.props.colors.map((x, i) => 
            <div key={x + i} className="palette_circle" style={{ backgroundColor: x }}></div>
        )
        return colors;
    }

    render() {
        let colorCircles = this.getColorCircles();

        return(        
            <div className="palette cf">
                {colorCircles}
            </div>
        )
    }
}