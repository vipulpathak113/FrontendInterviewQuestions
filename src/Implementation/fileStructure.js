import React, { useState } from "react";

function Entry({ entry, depth }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {entry.children ? (
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "- " : "+ "}
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileStructure() {
  const files = {
    children: [
      {
        name: "Components",
        children: [
          {
            name: "Pagination",
            children: [{ name: "index.js" }],
          },
        ],
      },
      { name: "package.json" },
    ],
  };

  return (
    <div style={{margin:10}}>
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}
