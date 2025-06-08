import { useEffect, useState } from "react";
import EntryForm from "../components/organisms/EntryForm";
import EntryList from "../components/organisms/EntryList";
import SummaryCard from "../components/organisms/SummaryCard";
import DrainSuggestion from "../components/organisms/DrainSuggestion";
import Heading from "../components/atoms/Heading";
import PageContainer from "../components/layout/PageContainer";

import { fetchEntries, createEntry } from "../api/entries";

const LogPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEntries = async () => {
    try {
      const data = await fetchEntries();
      setEntries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (entry) => {
    try {
      const newEntry = await createEntry(entry);
      setEntries((prev) => [newEntry, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <PageContainer>
      <Heading level={1}>Daily Log</Heading>
      <EntryForm onSubmit={handleAdd} />
      {loading ? (
        <p className="text-sm text-gray-500 mt-4">Loading entries...</p>
      ) : (
        <>
          <SummaryCard entries={entries} />
          <DrainSuggestion entries={entries} />
          <EntryList entries={entries} />
        </>
      )}
    </PageContainer>
  );
};

export default LogPage;
