import {useRef} from 'react';

const References = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>UseRef Practice</h2>
      <input ref={inputRef} />
      <button onClick={handleClick}>Set Focus</button>
    </div>
  );
};

export default References;
