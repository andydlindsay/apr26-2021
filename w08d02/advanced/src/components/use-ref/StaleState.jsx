import {useState, useRef} from 'react';

const StaleState = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef();
  counterRef.current = counter;

  const launchAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${counterRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>Stale State</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={launchAlert}>Launch Alert</button>
    </div>
  );
};

export default StaleState;
