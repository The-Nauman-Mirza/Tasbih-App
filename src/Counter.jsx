import { useState, useEffect } from "react";

const Counter = () => {
  // Initialize count from localStorage or default to 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0); // Reset count to 0
    localStorage.removeItem("count"); // Clear count from localStorage
  };

  return (
    <div className="counter-container">
      <h1>Tasbih App</h1>

      <p className="counter-display">{count}</p>
      <button className="count-inc" onClick={increment}>
        Count
      </button>
      <br />
      <button className="count-res" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
