import "./App.css";
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div style={{ display: "flex", gap: "10px" }}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>        
      </div>
    </div>
  );
}

export default App;
