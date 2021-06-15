import {useContext} from 'react';
import CounterContext from './CounterContext';

const ChildOne = () => {
  const {counter} = useContext(CounterContext);

  return (
    <div>
      <h2>ChildOne</h2>
      <h2>Current Count: {counter}</h2>
    </div>
  );
};

export default ChildOne;
