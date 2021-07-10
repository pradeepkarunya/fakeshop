import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListings from './containers/ProductListings';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListings} />
          <Route path="/product/:productId" component={ProductDetails} exact />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
        
      
    </div>
  );
}

export default App;
