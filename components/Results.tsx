import AutoSizer from "@ashlar-packages/react-virtualized-auto-sizer"; // See https://github.com/bvaughn/react-virtualized-auto-sizer/pull/40#issuecomment-1182478486
import { FixedSizeList as List } from "react-window";
import { Person } from "../interface/person";

interface ResultsProps {
  peopleFiltered: Person[];
}

export const Results: React.FC<ResultsProps> = ({ peopleFiltered }) => {
  const ResultRow = ({ index, style }: { [key: string]: any }) => {
    const person = peopleFiltered[index];
    return (
      <div key={person.id} style={style}>
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
      </div>
    );
  };

  return (
    <div
      style={{ width: "100%", height: "calc(100vh - 26rem)" }}
      className="no-scrollbars"
    >
      <AutoSizer>
        {({ width, height }: { width: number; height: number }) => (
          <List
            className="result"
            itemCount={peopleFiltered.length}
            itemSize={96}
            width={width}
            height={height}
          >
            {ResultRow}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
