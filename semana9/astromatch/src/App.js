import React from 'react';
import "./App.css";
import Post from './components/Post/Post'
import Match from './components/Match/Match';
import Header from './components/Header/Header';
import Botao from "./components/Botao/Botao";

function App() {

  return (
    <div className="App">
     <Header />


<Post />

<Botao />

    </div>
  );
};

export default App;
