import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList"
import "./index.css";

const App = () => (
  <div className="container">
    <ColorList></ColorList>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);

