import React from "react";

function Accordion({
  title = "Title",
  description = "Description",
  isOpen = false,
  underline = true,
  showWordCount=true,
  onClick = () => {},
}) {
 
  return (
    <div>
      <details className="w-80 bg-zinc-200 m-1 p-2 rounded-lg" open={isOpen} onClick={()=>onClick(title)}>
        <summary
          className={`font-bold cursor-pointer text-stone-900 ${
            underline && "hover:underline"
          }`}
        >
          {title}{" "}
          <span className="font-normal text-zinc-500">
            {" "} {showWordCount && `${description.split(" ").length} words`}
          </span>
        </summary>
        <p>{description}</p>
      </details>
    </div>
  );
}

export default Accordion;
