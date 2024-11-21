import React from "react";
import Bellow from "./Bellow";
import items from "../assets/items.json";
function App() {
  return (
    <div className="flex items-center justify-center h-screen marker:text-red-500">
      <Bellow
        data={items}
        filterByLetter=""
        isOpen={false}
        underline={true}
        // onClick={(value) => {console.log(value)}}
      />
    </div>
  );
}
export default App;
