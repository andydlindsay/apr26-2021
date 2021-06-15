import {useContext} from 'react';
import CounterContext from './CounterContext';

const ChildTwo = () => {
  const {setCounter} = useContext(CounterContext);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <div>
      <h2>ChildTwo</h2>
      <button onClick={handleClick}>Plus One</button>
    </div>
  );
};

export default ChildTwo;
