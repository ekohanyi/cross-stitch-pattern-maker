
import React from 'react';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showColorPicker: false
        }

        this.getColorOptions = this.getColorOptions.bind(this);
        this.getColorChange = this.getColorChange.bind(this);
        this.showHideColorPicker = this.showHideColorPicker.bind(this);
    }

    getColorChange(color) {
        if(this.props.onColorChange)
            this.props.onColorChange(color);
    }

    showHideColorPicker() {
        this.setState({ showColorPicker: !this.state.showColorPicker })
    }

    getColorOptions() {
        var _this = this;

        var options = dmcHexResource.map(function(x, index) {
            return (
                <Color 
                    key={"color_" + index}
                    description={x.description} 
                    hex={x.hex}
                    dmcID={x.dmcID}
                    color={x.hex} 
                    handleColorChange={(color) => _this.getColorChange(x.hex)}
                />
            );
        })

        return options;
    }

    render() {
        var colors = this.getColorOptions();
        var show = this.state.showColorPicker ? 'show' : 'hide';
        
        return (
            <div className='colors'>
                <div className='chosen-color' style={{ backgroundColor: this.props.currentColor }} onClick={() => this.showHideColorPicker()}></div>
                <div className={'color-grid-container cf ' + show}>
                    {colors}
                </div>
            </div>
        );
    }
}

class Color extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div 
                className='color-option' 
                style={{ backgroundColor: this.props.color }}
                onClick={(color) => this.props.handleColorChange(this.props.color)}
            >
                {this.props.description} <br/>
                {this.props.dmcID} <br/>
                {this.props.hex}
            </div>
        );
    }
}