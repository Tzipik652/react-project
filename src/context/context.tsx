import { createContext, useContext, useState, FC, ReactNode } from "react";

type CommentsContextType = {
  excellent: number;
  nice: number;
  bad: number;
  setExcellent: React.Dispatch<React.SetStateAction<number>>;
  setNice: React.Dispatch<React.SetStateAction<number>>;
  setBad: React.Dispatch<React.SetStateAction<number>>;
};

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

export const CommentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
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

export const useComments = (): CommentsContextType => {
  const context = useContext(CommentsContext);
  if (!context) throw new Error("useComments must be used within a CommentsProvider");
  return context;
};
