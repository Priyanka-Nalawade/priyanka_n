import React from "react";
import LoadingIcon from "../assets/images/loading.webp";

export default function Loading() {
  return (
    <div
      style={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={LoadingIcon} alt="Loading..." />
    </div>
  );
}