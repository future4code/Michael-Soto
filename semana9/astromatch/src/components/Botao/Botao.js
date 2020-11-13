import React from 'react';
import "./Botao.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { Container } from './styles';

function Botao() {


  // const clickCoracao = (event) => {
  //   console.log("aaaaaaa");
  //   setPerfil(event.target.value);
  // };

  // const clickX = (event) => {
  //   console.log("eeeeeee");
  //   setPerfil(event.target.value);
  // };








  return (
    <div className="App-iconPerfil">
      <HighlightOffIcon
        color="secondary"
        style={{ fontSize: 40 }}
        // onClick={clickX}
      />
      <FavoriteIcon
        color="secondary"
        style={{ fontSize: 40 }}
        // onClick={clickCoracao}
      />
    </div>
  );
}

export default Botao;
