import logo from './logo.svg';
import './App.css';
import Read from './components/tabla';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Tabla de cosas aleatorias</h2>
        <div>
          <Route exact path="/" component={Read}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
