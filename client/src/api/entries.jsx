const API_BASE = process.env.REACT_APP_API_URL || "";

export const fetchEntries = async (query = "") => {
  const res = await fetch(`${API_BASE}/api/entries${query ? "?" + query : ""}`);
  if (!res.ok) throw new Error("Failed to fetch entries");
  return res.json();
};

export const createEntry = async (entry) => {
  const res = await fetch(`${API_BASE}/api/entries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error("Failed to create entry");
  return res.json();
};
