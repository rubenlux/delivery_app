import React from "react";
import { useState, useEffect } from "react";

export const Category = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get("/categories");
        setCategory(res.data);
        console.log(res);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getCategory();
  }, []);

  return (
    <div className='cats'>
      <Cats category={category} />
    </div>
  );
};
