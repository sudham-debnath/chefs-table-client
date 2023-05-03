/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefsDetails = () => {
  const { id } = useParams();

  const [chefsData, setChefsData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/allData/${id}`)
      .then((response) => response.json())
      .then((data) => setChefsData(data));
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Chefs Details</h1>
      <p>{chefsData.name}</p>
      {/* Render other chef details */}
    </div>
  );
};


export default ChefsDetails;
