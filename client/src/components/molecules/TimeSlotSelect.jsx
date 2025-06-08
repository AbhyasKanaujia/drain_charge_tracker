const timeSlots = [
  "7–8 AM",
  "8–9 AM",
  "9–10 AM",
  "10–11 AM",
  "11–12 PM",
  "12–1 PM",
  "1–2 PM",
  "2–3 PM",
  "3–4 PM",
  "4–5 PM",
  "5–6 PM",
  "6–7 PM",
  "7–8 PM",
  "8–9 PM",
  "9–10 PM",
];

const TimeSlotSelect = ({ value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor="timeSlot" className="text-sm text-gray-700">
      Time Slot
    </label>
    <select
      id="timeSlot"
      name="timeSlot"
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
    >
      <option value="">Select a time slot</option>
      {timeSlots.map((slot) => (
        <option key={slot} value={slot}>
          {slot}
        </option>
      ))}
    </select>
  </div>
);

export default TimeSlotSelect;
