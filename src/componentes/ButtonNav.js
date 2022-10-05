import React from "react";

const ButtonNav= (props) =>(
<li className="bg-yellow-200 rounded border-zinc-300 border-4 p-2">
          <button target="_blank">{ props.children }</button>
        </li>
);
export default ButtonNav;