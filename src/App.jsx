import React, { useEffect, useState } from "react";

import { Approutes } from "./Approutes";

const App = () => {
  const [data, setData] = useState({ categories: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col">
      <Approutes data={data} loading={loading} error={error} />
    </div>
  );
};

export default App;
