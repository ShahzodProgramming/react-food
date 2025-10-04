import React, { useEffect, useState } from "react";

import { Approutes } from "./Approutes";

const App = () => {
  const [data, setData] = useState({ categories: [] });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col">
      <Approutes data={data} />
    </div>
  );
};

export default App;
