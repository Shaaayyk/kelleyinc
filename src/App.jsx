import {Route} from 'react-router-dom'
import Home from './screens/Home/Home'
import './App.css';

function App() {
  return (
    <div className="app">
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
