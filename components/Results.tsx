import { Person } from "../interface/person";

interface ResultsProps {
  peopleFiltered: Person[];
}

export const Results: React.FC<ResultsProps> = ({ peopleFiltered }) => {
  return (
    <>
      {peopleFiltered.map((person) => (
        <div className="result" key={person.id}>
          <div>
            <img src={person.avatar} alt={person.name} />
          </div>
          <div>
            <h1>{person.name}</h1>
            <p>{person.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
