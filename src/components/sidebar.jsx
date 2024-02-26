import { useState } from "react";

function Sidebar() {
  let [color, setColor] = useState("bg-white");
  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div className={`w-[100%] h-[100%] ${color} overflow-hidden  duration-300`}>
      <div className="h-[100vh] w-[120px] bg-slate-700">
        <h1 className="text-white text-center pt-10 font-bold text-2xl">
          Sidebar
        </h1>
        <div className="buttonWrapper flex justify-center align-middle flex-col w-[100%] h-[100%] text-[20px] gap-7">
          <button
            onClick={() => changeColor((color = "bg-red-400"))}
            className="px-2 py-1 bg-red-400 rounded-br-xl"
          >
            Red
          </button>
          <button
            onClick={() => changeColor((color = "bg-blue-400"))}
            className="px-2 py-1 bg-blue-400 rounded-br-xl"
          >
            Blue
          </button>
          <button
            onClick={() => changeColor((color = "bg-green-400"))}
            className="px-2 py-1 bg-green-400 rounded-br-xl"
          >
            Green
          </button>
          <button
            onClick={() => changeColor((color = "bg-purple-400"))}
            className="px-2 py-1 bg-purple-400 rounded-br-xl"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
