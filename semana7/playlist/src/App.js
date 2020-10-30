import React from "react";
import FormPage from "./components/FormPage";
import UserListPage from "./components/UserListPage";
import styled from "styled-components";
import './App.css';


const Header = styled.header`
background-color:black;
display:flex;
font-size:20px;
justify-content:center;
align-items:center;
color:white;
height:3rem;
position:relative;
top:-3rem;
`




class App extends React.Component {
state= {
  FormPage: true
}

changePage = (  ) => {
  this.setState({formPage: !this.state.formPage })
}

render() {
  const currentPage = this.state.formPage? <FormPage /> : <UserListPage />

  return (
    <div className="App">
<Header>Player Music</Header>
{currentPage}
<br />
<button onClick={this.changePage}>Mudar de Página</button>
    </div>
    
  );
}
}

export default App;
