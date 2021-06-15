import './App.css';
// import Navigation from './components/react-router/Navigation';
// import Styled from './components/styled-components/Styled';
// import Parent from './components/use-context/Parent';
// import References from './components/use-ref/References';
import StaleState from './components/use-ref/StaleState';

const App = () => {
  return (
    <div className="App">
      <h2>Advanced React</h2>
      {/* <Navigation /> */}
      {/* <Styled /> */}
      {/* <Parent /> */}
      {/* <References /> */}
      <StaleState />
    </div>
  );
};

export default App;
