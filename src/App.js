import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import EventDetailed from './components/EventDetailed'
import Events from './components/Events'
import joinUs from './components/joinUs'

import Error from './components/Error'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={joinUs} path='/join-us' />
        <Route component={EventDetailed} path='/events/:slug' />
        <Route component={Events} path='/events' />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
