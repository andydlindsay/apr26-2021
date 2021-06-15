import ChildTwo from "./ChildTwo";
// import ChildOne from "./ChildOne";
import InBetween from "./InBetween";
import CounterContext from "./CounterContext";
import {useState} from 'react';

const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Parent</h2>

      <CounterContext.Provider value={{counter, setCounter}}>
        {/* <ChildOne/> */}
        <InBetween />
        <ChildTwo/>
      </CounterContext.Provider>
    </div>
  );
};

export default Parent;
