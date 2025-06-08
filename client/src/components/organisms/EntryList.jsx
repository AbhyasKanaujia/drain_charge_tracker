import EntryRow from "../molecules/EntryRow";
import Heading from "../atoms/Heading";

const EntryList = ({ entries = [] }) => {
  return (
    <div className="space-y-4 mt-8">
      <Heading level={2}>Today's Entries</Heading>
      {entries.length === 0 ? (
        <p className="text-sm text-gray-500">No entries yet.</p>
      ) : (
        entries.map((entry, index) => <EntryRow key={index} entry={entry} />)
      )}
    </div>
  );
};

export default EntryList;
