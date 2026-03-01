import Student from "./student";

function App() {
  return (
    <Student name="ZAMBA PHILIP" course="BSIT" year="2026" />
  );
}

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // Starts at 0 [cite: 149]

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default App;