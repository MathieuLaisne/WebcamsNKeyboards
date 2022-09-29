import React from 'react';
import './App.css';
import { Map } from "./map"
import { token, map } from './type';

const layer: token[] = [{
  Image: "public/logo512.png"
}]

const MapTest: map = {
  Plan: layer,
  Main: layer,
  GM: layer,
}

function App() {
  return (
    <Map ThisMap={MapTest}></Map>
  );
}

export default App;
