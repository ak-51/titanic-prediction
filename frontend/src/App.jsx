import './App.css'
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import Info from './components/Info.jsx'
import Data from './components/Data.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Info />
            <Data />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
