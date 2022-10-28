
import { map, token } from './type'
import { Stage, Layer, Image, Text } from 'react-konva';
import React from 'react';


export const Map = ({ ThisMap }: { ThisMap: map }) => {
    const gm = ThisMap.GM.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    const main = ThisMap.Main.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    const plan = ThisMap.Plan.map((ThisToken:token) => { <Token tok={ThisToken}/>})
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {plan}
            </Layer>
            <Layer>
                {main}
            </Layer>
            <Layer>
                {gm}
            </Layer>
        </Stage>
    );
};

const Token = ({tok} : {tok:token}) => {
    let tokenImg:CanvasImageSource = new window.Image();
    tokenImg.src = tok.Image;
    return(
        <Image
            x={tok.Position ? tok.Position.x : 0}
            y={tok.Position ? tok.Position.y : 0}
            image={tokenImg}
        />
    );
};
