import { createContext, useContext } from "react";
import { Person } from "../../interface/person";

import peopleData from "../../data/people.json";

interface PeopleContextProps {
  people: Person[];
}

export const PeopleContext = createContext<PeopleContextProps>({
  people: [],
});

export const PeopleProvider = ({ children }: { children: JSX.Element }) => {
  // In production, this might be an API call to a service
  const people = peopleData;
  return (
    <PeopleContext.Provider
      value={{
        people,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeopleContext = () => useContext(PeopleContext);
