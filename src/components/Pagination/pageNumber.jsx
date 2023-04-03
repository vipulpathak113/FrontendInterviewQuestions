import React from "react";

export default function PageNumber({ totalPages, paginate }) {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {pageNumbers.map((page) => (
        <span
          style={{ border: "1px solid black", padding: "2px" }}
          onClick={() => {
            paginate(page);
          }}
        >
          {page}
        </span>
      ))}
    </div>
  );
}
