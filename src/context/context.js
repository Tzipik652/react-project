import { createContext, useContext, useState } from "react";

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [excellent, setExcellent] = useState(0);
  const [nice, setNice] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <CommentsContext.Provider
      value={{ excellent, nice, bad, setExcellent, setNice, setBad }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
