import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Read from './components/cosa/read_Delete';
import Update from './components/cosa/update';
import Create from './components/cosa/create';
import Read_Delete_Ropa from './components/Ropa/read_Delete'
import CategoriaRead from './components/categorias';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Tabla de cosas aleatorias</h2>
        <CategoriaRead/>
        {/* <Link to="/create">
          <button className='main-button'>Crear</button>
        </Link> */}
        <div>
          <Route exact path="/ropa" component={Read_Delete_Ropa}></Route>
        </div>
        <div>
          <Route exact path="/" component={Read}></Route>
        </div>
        <div>
            <Route exact path='/update' component = {Update}></Route>
        </div>
        {/* <div>
          <Route exact path="/create" component={Create}></Route>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
