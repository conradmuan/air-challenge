import React, { useState, useMemo } from "react";
import { QuickScore } from "quick-score";
import { Results } from "./Results";

import { Person } from "../interface/person";

interface PeopleSearchProps {
  people: Person[];
}

export const PeopleSearch: React.FC<PeopleSearchProps> = ({ people }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const peopleFiltered = useMemo(() => {
    const score = new QuickScore(people, ["name", "email"]);
    return score.search(searchQuery).map(({ item }: { item: Person }) => item);
  }, [searchQuery]);

  return (
    <>
      <form
        action="#search"
        onSubmit={formSubmitHandler}
        className="mb-8 xl:mb-12"
      >
        <input
          type="text"
          placeholder="Search in Air HQ"
          value={searchQuery}
          onChange={searchHandler}
          className="py-2.5 px-4 rounded border border-air-grey hover:bg-air-light-grey hover:border-air-blue text-sm w-full"
        />
      </form>
      <Results peopleFiltered={peopleFiltered} />
    </>
  );
};
