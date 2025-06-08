import { useState } from 'react';
import PageContainer from './components/layout/PageContainer';
import Heading from './components/atoms/Heading';

import EntryForm from './components/organisms/EntryForm';
import EntryList from './components/organisms/EntryList';
import SummaryCard from './components/organisms/SummaryCard';
import DrainSuggestion from './components/organisms/DrainSuggestion';

function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries(prev => [
      { ...entry, createdAt: new Date().toISOString() },
      ...prev
    ]);
  };

  return (
    <PageContainer>
      <Heading level={1}>Drain & Charge Tracker</Heading>
      <EntryForm onSubmit={handleAddEntry} />
      <SummaryCard entries={entries} />
      <DrainSuggestion entries={entries} />
      <EntryList entries={entries} />
    </PageContainer>
  );
}

export default App;
