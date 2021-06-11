import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/home';
import Galeria from './components/galeria';
import Videos from './components/videos';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact component={Home}></Route>
      <Route path='/galeria'exact component={Galeria}></Route>
      <Route path='/videos' component={Videos}></Route>
    </div>
    
    </Router>
  );
}

export default App;
