import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Create from './pages/create/create';
import Blog from './pages/blog/blog';
import Search from './pages/search/search';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/create">
          <Create/>
        </Route>
        <Route  path="/search">
          <Search/>
        </Route>
        <Route  path="/blog/:id">
          <Blog/>
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
