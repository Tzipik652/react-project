import "./App.css";
import {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import About from "./pages/About";

function App() {
  const [excellent, setExcellent] = useState(0);
  const [nice, setNice] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div className="App">
      <Header></Header>
      <div style={{ display: "flex", gap: "10px" }}>
        <Nav></Nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setBad={() => setBad((prev) => prev + 1)}
                setNice={() => setNice((prev) => prev + 1)}
                setExcellent={() => setExcellent((prev) => prev + 1)}
              />
            }
          />
          <Route path="/comments" element={<Comments bad={bad} nice={nice} excellent={excellent} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
