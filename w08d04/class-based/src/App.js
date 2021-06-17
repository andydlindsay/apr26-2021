import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  return (
    <div className="App">
      <h2>Class-based Components</h2>

      <Router>
        <nav>
          <Link to="/">Classbased Component</Link><br/>
          <Link to="/lifecycle">Lifecycle Component</Link>
        </nav>

        <Switch>
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/">
            <ClassBased heading="Message from the Parent">
              <h2>Children from the parent</h2>
            </ClassBased>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

// const classBased = new ClassBased(props);
// classBased.props = props;