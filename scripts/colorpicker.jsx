
import React from 'react';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.getColorOptions = this.getColorOptions.bind(this);
        this.getColorChange = this.getColorChange.bind(this);
    }

    getColorChange(color) {
        if(this.props.onColorChange)
            this.props.onColorChange(color);
    }

    getColorOptions() {
        var _this = this;

        var options = dmcHexResource.map(function(x, index) {
            return (
                <Color 
                    key={"color_" + index}
                    description={x.description} 
                    color={x.hex} 
                    handleColorChange={(color) => _this.getColorChange(x.hex)}
                />
            );
        })

        return options;
    }

    render() {
        var colors = this.getColorOptions();
        return <div className='color-grid-container cf'>{colors}</div>;
    }
}

class Color extends React.Component {
    render() {
        return (
            <div 
                className='color-option' 
                style={{ backgroundColor: this.props.color }}
                onClick={(color) => this.props.handleColorChange(this.props.color)}
            >
                {this.props.description}
            </div>
        );
    }
}