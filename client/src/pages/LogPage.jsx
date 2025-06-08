import EntryForm from "../components/organisms/EntryForm";
import EntryList from "../components/organisms/EntryList";
import SummaryCard from "../components/organisms/SummaryCard";
import DrainSuggestion from "../components/organisms/DrainSuggestion";
import Heading from "../components/atoms/Heading";
import PageContainer from "../components/layout/PageContainer";
import { useState } from "react";

const LogPage = () => {
  const [entries, setEntries] = useState([]);

  const handleAdd = (entry) => {
    setEntries((prev) => [
      { ...entry, createdAt: new Date().toISOString() },
      ...prev,
    ]);
  };

  return (
    <PageContainer>
      <Heading level={1}>Daily Log</Heading>
      <EntryForm onSubmit={handleAdd} />
      <SummaryCard entries={entries} />
      <DrainSuggestion entries={entries} />
      <EntryList entries={entries} />
    </PageContainer>
  );
};

export default LogPage;
