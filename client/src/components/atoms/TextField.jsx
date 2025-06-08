const TextField = ({ label, name, value, onChange, placeholder, type = 'text' }) => (
  <div className="flex flex-col gap-1">
    {label && <label htmlFor={name} className="text-sm text-gray-700">{label}</label>}
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
    />
  </div>
);

export default TextField;
