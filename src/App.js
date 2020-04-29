import React from "react";
import "./App.css";
import "./page2.css";
import routes from "./routes"
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
