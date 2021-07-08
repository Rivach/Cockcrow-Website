
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import singleEvent from './components/singleEvent'
import Events from './components/Events'
import joinUs from './components/joinUs'

import Error from './components/Error'
function App() {
  return (
 
         <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={joinUs} path='/join-us' />
        <Route component={Events} path='/events' />
        <Route component={singleEvent} path='/events/:slug' />
    
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
      );
}

export default App;
