import React from 'react';
import './App.css';
import { LayerInfo, Map } from './map'
import { map, token } from './type'
import { Stage, Layer, Image, Text } from 'react-konva';

const plan:token = {
  Image: "https://media.discordapp.net/attachments/424592501714714640/1071497259654590465/image.png",
  name: "fond Branche",
  Position: { x: 10, y: 100}
}

const main:token = {
  Image: "https://konvajs.org/assets/yoda.jpg",
  name: "Yoda Main",
  Position: { x: 20, y: 100}
}

const gm:token = {
  Image: "https://konvajs.org/assets/yoda.jpg",
  name: "Yoda GM",
  Position: { x: 120, y: 200}
}

const testmap:map = {
  Plan: [plan],
  Main: [main],
  GM: [gm],
}

function App() {
  return (
    <>
      <Stage width={window.innerWidth - 100} height={window.innerHeight}>
        <Map ThisMap={testmap}/>
        <LayerInfo ThisMap={testmap}/>
      </Stage>
    </>
  );
}

export default App;
