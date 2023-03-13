import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import Create from './pages/create/create';
import Blog from './pages/blog/blog';
import Search from './pages/search/search';
import Navbar from './component/navbar';
import ThemeSelector from './component/themeSelector';
import { useTheme } from './hook/useTheme';

function App() {
  const{mode}=useTheme();
  return (
    <div className={`App ${mode}`}>
     <BrowserRouter>
     <Navbar/>
     <ThemeSelector></ThemeSelector>
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
