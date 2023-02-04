
import { map, token, tokenProps, tokenState } from './type'
import { Stage, Layer, Image, Text } from 'react-konva';
import React from 'react';
import useImage from 'use-image';

export const Map = ({ ThisMap }: { ThisMap: map }) => {
    return (
        <>
            <Layer>
                { ThisMap.Plan.map((ThisToken: token) => { return <TokenTest tok={ThisToken}/>})}
            </Layer>
            <Layer>
                { ThisMap.Main.map((ThisToken: token) => { return <TokenTest tok={ThisToken}/>})}
            </Layer>
            <Layer>
                { ThisMap.GM.map((ThisToken: token) => { return <TokenTest tok={ThisToken}/>})}
            </Layer>
        </>
    );
};

const TokenTest = (props: tokenProps) => {
    const [image] = useImage(props.tok.Image);
    return (
    <Image 
        x={props.tok.Position ? props.tok.Position.x : 0}
        y={props.tok.Position ? props.tok.Position.y : 0}
        image={image}
        draggable={true}
        onDragEnd={(e) => {
                props.tok.Position = {x: e.target.x(), y:e.target.y()};
            }
        }
     />
     );
  };

export class Token extends React.Component<tokenProps, tokenState> {

    componentDidMount() {
        this.loadImage();
    }
      
    constructor(tok: tokenProps)
    {
        super(tok)
    }

    componentDidUpdate(oldProps: tokenProps) {
        if (oldProps.tok.Image !== this.props.tok.Image) {
          this.loadImage();
        }
    }

    componentWillUnmount() {
        this.state.image.removeEventListener('load', this.handleLoad);
    }

    loadImage() {
        // save to "this" to remove "load" handler on unmount
        const image = new window.Image();
        image.src = this.props.tok.Image;
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
                x={this.props.tok.Position ? this.props.tok.Position.x : 0}
                y={this.props.tok.Position ? this.props.tok.Position.y : 0}
                image={this.state.image}
                draggable={true}
                onDragEnd={(e) => {
                        this.props.tok.Position = {x: e.target.x(), y:e.target.y()};
                    }
                }
            />
        );
    }
}
