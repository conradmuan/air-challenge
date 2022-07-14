import { Person } from "../interface/person";

interface ResultsProps {
  peopleFiltered: Person[];
}

export const Results: React.FC<ResultsProps> = ({ peopleFiltered }) => {
  return (
    <div>
      {peopleFiltered.map((person) => (
        <div className="flex space-x-4 mb-4 xl:mb-6" key={person.id}>
          <div className="flex-initial w-12 md:w-24">
            <img src={person.avatar} alt={person.name} />
          </div>
          <div className="flex-1">
            <h1 className="font-bold mb-2">{person.name}</h1>
            <p className="text-sm text-air-dark-grey-100">
              {person.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
