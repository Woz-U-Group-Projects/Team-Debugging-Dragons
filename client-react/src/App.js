import React from "react";

import './App.css';
import Registration from "./components/Registration";
import Users from './components/Users';



export default function App(props) {
  return (
    <div className="App">
      <Users />
      <Registration/>
    </div>
  );
}
