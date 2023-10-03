import './App.css';
import Read from './components/read_Delete';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Update from './components/update';
import Create from './components/create';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Tabla de cosas aleatorias</h2>
        <Link to="/create">
          <button className='main-button'>Crear</button>
        </Link>
        <div>
          <Route exact path="/" component={Read}></Route>
        </div>
        <div>
            <Route exact path='/update' component = {Update}></Route>
        </div>
        <div>
          <Route exact path="/create" component={Create}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
