import { useState } from "react";
import TimeSlotSelect from "../molecules/TimeSlotSelect";
import FeelingInput from "../molecules/FeelingInput";
import TypeSelector from "../molecules/TypeSelector";
import TextField from "../atoms/TextField";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";

const defaultState = {
  timeSlot: "",
  activity: "",
  feelingAfter: "",
  type: "",
  notes: "",
};

const EntryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(defaultState);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTypeChange = (e) => {
    setFormData((prev) => ({ ...prev, type: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.activity || !formData.type || !formData.timeSlot) return;
    onSubmit(formData);
    setFormData(defaultState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Activity"
        name="activity"
        value={formData.activity}
        onChange={handleChange}
        placeholder="e.g. Lunch with Friends"
      />
      <TimeSlotSelect value={formData.timeSlot} onChange={handleChange} />
      <FeelingInput value={formData.feelingAfter} onChange={handleChange} />
      <TypeSelector value={formData.type} onChange={handleTypeChange} />
      <TextArea
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Optional thoughts..."
      />
      <Button type="submit" variant="primary">
        Add Entry
      </Button>
    </form>
  );
};

export default EntryForm;
