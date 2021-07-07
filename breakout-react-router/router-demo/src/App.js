import './App.css';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/products">Products</Link><br/>

        {/* <a href="/about" target="_blank">About</a>

        <Link to="/products/2">
          <img src="https://secure.img1-fg.wfcdn.com/im/54691146/resize-h800%5Ecompr-r85/1284/128484813/4-Slice+Stainless+Steel+Toaster.jpg" height="250"/>
        </Link> */}

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
