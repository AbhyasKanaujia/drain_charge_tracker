const TypeSelector = ({ value, onChange, includeAllOption = false }) => {
  const options = [
    ...(includeAllOption ? [{ label: "All", value: "" }] : []),
    { label: "Charge", value: "C" },
    { label: "Drain", value: "D" },
  ];

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-700">Type</span>
      <div className="flex gap-2">
        {options.map(({ label, value: val }) => (
          <button
            key={val}
            type="button"
            className={`px-3 py-1 rounded border text-sm ${
              value === val
                ? val === "C"
                  ? "bg-green-200 border-green-500"
                  : val === "D"
                    ? "bg-red-200 border-red-500"
                    : "bg-gray-300 border-gray-500"
                : "bg-gray-100 border-gray-300"
            }`}
            onClick={() => onChange({ target: { value: val } })}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeSelector;
