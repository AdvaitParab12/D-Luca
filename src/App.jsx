import React from "react";
import Bellow from "./Bellow";
function App() {
  const debates= [
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
  return (
    <div className="flex items-center justify-center h-screen marker:text-red-500">
      <Bellow data={debates}  filterByLetter="R" isOpen={false} />
    </div>
  );
}
export default App;
