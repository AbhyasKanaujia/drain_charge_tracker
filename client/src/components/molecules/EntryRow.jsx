import Tag from "../atoms/Tag";

const EntryRow = ({ entry }) => (
  <div className="flex flex-col border-b py-2">
    <div className="flex justify-between items-center">
      <span className="font-medium">{entry.activity}</span>
      <Tag type={entry.type} />
    </div>
    <div className="text-sm text-gray-600">
      {entry.timeSlot} – {entry.feelingAfter}
    </div>
    {entry.notes && (
      <div className="text-sm text-gray-500 italic mt-1">{entry.notes}</div>
    )}
  </div>
);

export default EntryRow;
