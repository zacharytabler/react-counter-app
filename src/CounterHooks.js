import React, { useContext, useState } from "react";

import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  const [count, setcount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button
        style={style}
        onClick={() => setcount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setcount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}
