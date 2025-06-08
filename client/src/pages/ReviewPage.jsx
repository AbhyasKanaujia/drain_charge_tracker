import { useEffect, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import Heading from "../components/atoms/Heading";
import SummaryCard from "../components/organisms/SummaryCard";
import DrainSuggestion from "../components/organisms/DrainSuggestion";
import EntryList from "../components/organisms/EntryList";
import Button from "../components/atoms/Button";

import { fetchEntries } from "../api/entries";

const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd

const ReviewPage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState(today);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadFilteredEntries = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (from) params.append("from", from);
      if (to) params.append("to", to);
      const data = await fetchEntries(params.toString());
      setEntries(data);
    } catch (err) {
      console.error("Error fetching filtered entries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFilteredEntries();
  }, []);

  return (
    <PageContainer>
      <Heading level={1}>Review & Reflect</Heading>

      <div className="flex flex-wrap gap-4 items-end mt-6">
        <div className="flex flex-col text-sm">
          <label className="mb-1 text-gray-600">From</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col text-sm">
          <label className="mb-1 text-gray-600">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <Button onClick={loadFilteredEntries}>Apply Filter</Button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500 mt-6">Loading...</p>
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

export default ReviewPage;
