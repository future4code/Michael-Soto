import React, { useState } from "react";
import "./Match.css";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";


const Match = (props) => {
  const [formPage, setFormPage] = useState(true);

  const mudarPagina = () => {
 
    window.location.href = "../App/App.js";
  };


  return (
    <div className="App-header">
      <h3>astroMatch</h3>

      <SupervisorAccountIcon
        color="primary"
        style={{ fontSize: 40 }}
        onClick={mudarPagina}
      />
    </div>
  );
};

export default Match;
