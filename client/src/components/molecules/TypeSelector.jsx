const TypeSelector = ({ value, onChange }) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm text-gray-700">Type</span>
    <div className="flex gap-2">
      {["C", "D"].map((type) => (
        <button
          key={type}
          type="button"
          className={`px-3 py-1 rounded border text-sm ${
            value === type
              ? type === "C"
                ? "bg-green-200 border-green-500"
                : "bg-red-200 border-red-500"
              : "bg-gray-100 border-gray-300"
          }`}
          onClick={() => onChange({ target: { value: type } })}
        >
          {type === "C" ? "Charge" : "Drain"}
        </button>
      ))}
    </div>
  </div>
);

export default TypeSelector;
