import React from 'react';
import './App.css';
import { Map } from './map'
import { map, token } from './type'


const ui:token = {
  Image: require("./public/Assets/Token/Konva.png"),
}

const testmap:map = {
  Plan: [ui],
  Main: [ui],
  GM: [ui],
}

function App() {
  return (
    <Map ThisMap={testmap}/>
  );
}

export default App;
