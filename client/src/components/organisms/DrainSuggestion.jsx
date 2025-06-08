const DrainSuggestion = ({ entries }) => {
  const drains = entries.filter((e) => e.type === "D");
  if (drains.length === 0) return null;

  const oldestDrain = drains.reduce((a, b) =>
    new Date(a.createdAt) < new Date(b.createdAt) ? a : b,
  );

  return (
    <div className="mt-6 p-4 border-l-4 border-red-500 bg-red-50 text-sm">
      <p className="font-semibold mb-1">Suggestion:</p>
      <p>
        Consider removing or reducing: <strong>{oldestDrain.activity}</strong>
        <br />
        <span className="text-xs text-gray-500">
          ({oldestDrain.timeSlot}, {oldestDrain.feelingAfter})
        </span>
      </p>
    </div>
  );
};

export default DrainSuggestion;
