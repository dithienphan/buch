import React, { useState, createContext } from 'react';

type TBuch = {
  titel: string;
  untertitel: string;
};

type BuchContextType = {
  buch: TBuch | null;
  setBuch: React.Dispatch<React.SetStateAction<TBuch | null>>;
};

type BuchContextProviderProps = {
  children: React.ReactNode;
};

// export const BuchContext = createContext<BuchContextType | null>(null)
export const BuchContext = createContext({} as BuchContextType);

export const BuchContextProvider = ({ children }: BuchContextProviderProps) => {
  const [buch, setBuch] = useState<TBuch | null>(null);
  return (
    <BuchContext.Provider value={{ buch, setBuch }}>
      {children}
    </BuchContext.Provider>
  );
};
