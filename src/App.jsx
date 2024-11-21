import React from "react";
import { useState } from "react";
import Bellow from "./Bellow";
import items from "../assets/items.json";
function App() {
  const [lastClicked, setLastClicked] = useState("None");
  return (
    <div className="flex flex-col items-center justify-center h-screen marker:text-red-500">
      <h1>Last Clicked : {lastClicked}</h1>
      <Bellow
        data={items}
        filterByLetter=""
        isOpen={false}
        underline={true}
        setLastClicked={setLastClicked}
        // onClick={(value) => {console.log(value)}}
      />
    </div>
  );
}
export default App;
