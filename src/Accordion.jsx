import React from "react";

function Accordion({ title="Title", description="Description", isOpen=false }) {
  return (
    <div>
      <details className="w-80 bg-zinc-200 m-1 p-2 rounded-lg" open={isOpen}>
        <summary className="font-bold">{title}</summary>
        <p>
          {description}
        </p>
      </details>
    </div>
  );
}

export default Accordion;
