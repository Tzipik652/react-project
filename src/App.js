import "./App.css";
import {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Comments from "./pages/Comments";
import About from "./pages/About";
import Home from "./pages/Home";
import AppRouter from "./AppRouter";

function App() {
 
  return (
    <div className="App">
      <Header/>
      <div style={{ display: "flex", gap: "10px" }}>
        <Nav></Nav>
        <AppRouter/>
      
      </div>
    </div>
  );
}

export default App;
