import React from "react";
import Accordion from "./Accordion";

function Bellow() {
  const data = [
    {
      title: "Marvels Vs DC",
      description: "Marvel is the best",
    },
    {
      title: "React Vs Vue",
      description: "React is the best",
    },
    {
      title: "Java Vs Kotlin",
      description: "Kotlin is the best",
    },
    {
      title: "Coke Vs Pepsi",
      description: "Coke is the best",
    },
  ];

  const Accordions = [];
  for (let i = 0; i < data.length; i++) {
    Accordions.push(
      <Accordion
        key={crypto.randomUUID()}
        title={data[i].title}
        description={data[i].description}
        isOpen={i === 0}
      />
    );
  }
  console.log(Accordions);
  
  return (
    <div className="border-2 border-zinc-600 rounded-lg p-4">
      {Accordions}
    </div>
  );
}

export default Bellow;
