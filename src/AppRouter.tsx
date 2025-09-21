import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import About from "./pages/About";
import Home from "./pages/Home";
import { useComments } from "./context/context";
import { FC } from "react";

const AppRouter:FC = () => {
  const { setBad, setNice, setExcellent } = useComments();

  return (
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
      <Route
        path="/comments"
        element={<Comments />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
