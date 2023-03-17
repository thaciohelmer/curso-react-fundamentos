import React from "react";
import { useParams } from "react-router-dom";

export default function Param(props) {
  const { id } = useParams();

  return (
    <div>
      <h1 className="page-title">Param {id}</h1>
    </div>
  );
}
