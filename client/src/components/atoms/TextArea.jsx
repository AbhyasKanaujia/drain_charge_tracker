const TextArea = ({ label, name, value, onChange, placeholder, rows = 3 }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label htmlFor={name} className="text-sm text-gray-700">
        {label}
      </label>
    )}
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-200 resize-none"
    />
  </div>
);

export default TextArea;
