import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
/* import Read from './components/cosa/read_Delete';
import Update from './components/cosa/update'; */
import Update_Ropa from './components/Ropa/update';
import Create_Ropa from './components/Ropa/create';
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
        {/* <div>
          <Route exact path="/" component={Read}></Route>
        </div> */}
        {/* <div>
            <Route exact path='/update' component = {Update}></Route>
        </div> */}
        <div>
            <Route exact path='/ropa/update' component = {Update_Ropa}></Route>
        </div>
        {/* <div>
          <Route exact path="/create" component={Create}></Route>
        </div> */}
        <div>
          <Route exact path="/ropa/create" component={Create_Ropa}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
