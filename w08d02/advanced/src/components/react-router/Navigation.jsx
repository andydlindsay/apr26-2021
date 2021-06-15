import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';

const Navigation = () => {
  return (
    <div>
      <h2>Navigation</h2>

      <Router>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products</Link>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products" component={Products} />
          <Route path="/" component={Home} />
        </Switch>

        

      </Router>

    </div>
  );
};

export default Navigation;
