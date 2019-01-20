import React from 'react';
import Article from './Article';
import data from './../data';

function App() {
  return (
    <div>
      <h1>Learn React</h1>
      <Article article={data[0]}/>
    </div>
  )
}

export default App;