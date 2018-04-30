
import React from 'react';
import ColorPicker from './colorpicker.jsx';
import Palette from './palette.jsx';

export default class ColorContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreatePalette: false,
            paletteColors: ['#FBADB4', '#BA91AA', '#D3D7ED']
        }

        this.handleColorChange = this.handleColorChange.bind(this);
    }

    createPaletteClicked() {
        this.setState({ isCreatePalette: !this.state.isCreatePalette });
    }

    handleColorChange(color) {
        if(this.props.onColorChange && this.state.isCreatePalette === false)
            this.props.onColorChange(color);
        else if(this.state.isCreatePalette === true) {
            var newPaletteColors = this.state.paletteColors;
            newPaletteColors.push(color);
            this.setState({ paletteColors: newPaletteColors });
        }
        else 
            console.log('onColorChange not defined Emma da fuq you doing')
    }

    render() {
        return (
            <div>
                <div 
                    className={"button" + (this.state.isCreatePalette ? ' palette_mode' : '')} 
                    onClick={() => this.createPaletteClicked()}
                >
                    Create Palette
                </div>
                <ColorPicker onColorChange={(color) => this.handleColorChange(color)} currentColor={this.props.currentColor}/>
                <Palette colors={this.state.paletteColors} />
            </div>
        )
    }
}