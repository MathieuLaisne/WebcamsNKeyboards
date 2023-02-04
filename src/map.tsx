
import { map, token, tokenProps, tokenState } from './type'
import { Stage, Layer, Image, Text, Rect } from 'react-konva';
import React from 'react';
import useImage from 'use-image';

export const Map = ({ ThisMap }: { ThisMap: map }) => {
    return (
        <>
            <Layer>
                { ThisMap.Plan.map((ThisToken: token) => { return <Token tok={ThisToken}/>})}
            </Layer>
            <Layer>
                { ThisMap.Main.map((ThisToken: token) => { return <Token tok={ThisToken}/>})}
            </Layer>
            <Layer>
                { ThisMap.GM.map((ThisToken: token) => { return <Token tok={ThisToken}/>})}
            </Layer>
        </>
    );
};

export const Token = (props: tokenProps) => {
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

export const LayerInfo = ({ ThisMap }: { ThisMap: map }) => {
    var offset = 10;

    return(
        <Layer>
                <Text text='Lower Layer'/>
                { ThisMap.Plan.map((ThisToken: token, i: number) => { 
                    return <Text text={ThisToken.name} y={offset += 15 + i*10}/>})}
                <Text text='Main Layer' y={offset += 20}/>
                { ThisMap.Main.map((ThisToken: token, i: number) => { 
                    return <Text text={ThisToken.name} y={offset += 15 + i*10}/>})}
                <Text text='GM Layer' y={offset += 20}/>
                { ThisMap.GM.map((ThisToken: token, i: number) => { 
                    return <Text text={ThisToken.name} y={offset += 15 + i*10}/>})}
            
        </Layer>
    );
};