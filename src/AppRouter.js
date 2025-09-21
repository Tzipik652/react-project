import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import About from "./pages/About";
import Home from "./pages/Home";
import { useComments } from "./context/context";

const AppRouter = () => {
  const { bad, nice, excellent, setBad, setNice, setExcellent } = useComments();

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
        element={<Comments bad={bad} nice={nice} excellent={excellent} />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
