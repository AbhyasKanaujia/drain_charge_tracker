const Tag = ({ type }) => {
  const isCharge = type === "C";
  return (
    <span
      className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${isCharge ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
    >
      {isCharge ? "Charge" : "Drain"}
    </span>
  );
};

export default Tag;
