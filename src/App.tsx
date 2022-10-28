import React from 'react';
import './App.css';
import {Roll} from './roll'
import { dice } from './type';

const des : dice[] = [{
  Faces: 6,
  ZeroIncluded: false
},
{
  Faces: 10,
  ZeroIncluded: false
},
{
  Faces: 20,
  ZeroIncluded: false
}
]

function App() {
  return (
    <Roll jet={{
      Sender: {
        Name: 'MisterMax',
        Campaign: []
      },
      Dices: des
    }}/>
  );
}

export default App;
