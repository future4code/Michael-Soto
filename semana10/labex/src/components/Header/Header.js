import React from "react";
import { HeaderContainer,Menu,Lista  } from "./styles";

function Header() {
  return (
    <div className="App">
      <HeaderContainer>
        <p>LabeX</p>
        <nav>
          <Menu>
            <Lista>
              <a href="#">Incrição</a>
            </Lista>
            <Lista>
              <a href="#">Curso</a>
            </Lista>
            <Lista>
              <a href="#">Duvidas</a>
            </Lista>
       
          </Menu>
        </nav>
      </HeaderContainer>
    </div>
  );
}
export default Header;
