const SummaryCard = ({ entries }) => {
  const count = { C: 0, D: 0 };
  entries.forEach((e) => {
    if (e.type === "C") count.C += 1;
    else if (e.type === "D") count.D += 1;
  });

  const total = count.C + count.D;

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-6 shadow-sm">
      <div className="text-lg font-medium mb-2">Energy Summary</div>
      <div className="flex gap-8">
        <div className="flex flex-col text-green-700">
          <span className="text-sm">Charge</span>
          <span className="text-2xl font-semibold">{count.C}</span>
        </div>
        <div className="flex flex-col text-red-700">
          <span className="text-sm">Drain</span>
          <span className="text-2xl font-semibold">{count.D}</span>
        </div>
        {total > 0 && (
          <div className="flex flex-col text-gray-700">
            <span className="text-sm">Charge %</span>
            <span className="text-2xl font-semibold">
              {Math.round((count.C / total) * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;
