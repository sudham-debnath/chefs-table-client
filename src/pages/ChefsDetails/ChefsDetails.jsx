/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefsDetails = () => {
  const { id } = useParams();
  console.log(id);

  // const [chefsData, setChefsData] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/allData/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setChefsData(data));
  // }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Chefs Details</h1>
     
    </div>
  );
};



export default ChefsDetails;
