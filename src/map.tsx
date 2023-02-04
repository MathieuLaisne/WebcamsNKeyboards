
import { map, token, tokenState } from './type'
import { Stage, Layer, Image, Text } from 'react-konva';
import React from 'react';
import useImage from 'use-image';

export const Map = ({ ThisMap }: { ThisMap: map }) => {
    const gm = ThisMap.GM.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    const main = ThisMap.Main.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    const plan = ThisMap.Plan.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    return (
        <>
            <Layer>
                {plan}
            </Layer>
            <Layer>
                {main}
            </Layer>
            <Layer>
                {gm}
            </Layer>
        </>
    );
};

export class Token extends React.Component<token, tokenState> {

    componentDidMount() {
        this.loadImage();
    }
      
    constructor(tok: token)
    {
        super(tok)
    }

    componentDidUpdate(oldProps: token) {
        if (oldProps.Image !== this.props.Image) {
          this.loadImage();
        }
    }

    componentWillUnmount() {
        this.state.image.removeEventListener('load', this.handleLoad);
    }

    loadImage() {
        // save to "this" to remove "load" handler on unmount
        const image = new window.Image();
        image.src = this.props.Image;
        image.addEventListener('load', this.handleLoad);
        this.setState({ image });
    }

    handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
          image: this.state.image,
        });
    }

    render() {
        return(
            <Image
                x={this.props.Position ? this.props.Position.x : 0}
                y={this.props.Position ? this.props.Position.y : 0}
                image={this.state.image}
            />
        );
    }
}
