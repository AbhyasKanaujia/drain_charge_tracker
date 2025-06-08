import { useState } from 'react';

import PageContainer from './components/layout/PageContainer';
import Heading from './components/atoms/Heading';
import TextArea from './components/atoms/TextArea';
import Button from './components/atoms/Button';

import TimeSlotSelect from './components/molecules/TimeSlotSelect';
import FeelingInput from './components/molecules/FeelingInput';
import TypeSelector from './components/molecules/TypeSelector';
import EntryRow from './components/molecules/EntryRow';

function App() {
  const [formData, setFormData] = useState({
    timeSlot: '',
    activity: '',
    feelingAfter: '',
    type: '',
    notes: ''
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleTypeChange = (e) => {
    setFormData(prev => ({ ...prev, type: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries(prev => [formData, ...prev]);
    setFormData({ timeSlot: '', activity: '', feelingAfter: '', type: '', notes: '' });
  };

  return (
    <PageContainer>
      <Heading level={1}>Molecules Preview</Heading>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <TimeSlotSelect value={formData.timeSlot} onChange={handleChange} />

        <FeelingInput value={formData.feelingAfter} onChange={handleChange} />

        <TextArea
          label="Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Optional details..."
        />

        <TypeSelector value={formData.type} onChange={handleTypeChange} />

        <Button type="submit" variant="primary">Add Entry</Button>
      </form>

      <div className="mt-8 space-y-4">
        <Heading level={2}>Entries Preview</Heading>
        {entries.length === 0 ? (
          <p className="text-sm text-gray-500">No entries yet.</p>
        ) : (
          entries.map((entry, index) => <EntryRow key={index} entry={entry} />)
        )}
      </div>
    </PageContainer>
  );
}

export default App;
