import React from 'react';
import './App.css';
import { Map } from './map'
import { map, token } from './type'
import { Stage, Layer, Image, Text } from 'react-konva';

const test1:token = {
  Image: "./Assets/Token/Konva.png",
  Position: { x: 10, y: 100}
}

const test2:token = {
  Image: "./Assets/Token/Konva.png",
  Position: { x: 20, y: 100}
}

const test3:token = {
  Image: "./Assets/Token/Konva.png",
  Position: { x: 120, y: 200}
}

const testmap:map = {
  Plan: [test1],
  Main: [test2],
  GM: [test3],
}

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Map ThisMap={testmap}/>
    </Stage>
  );
}

export default App;
