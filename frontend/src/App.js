import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import CategoriaRead from './components/categorias';

import Update_Ropa from './components/Ropa/update';
import Create_Ropa from './components/Ropa/create';
import Read_Delete_Ropa from './components/Ropa/read_Delete'

import Read_Delete_Higiene from './components/Higiene/read_Delete'
import Create_Higiene from './components/Higiene/create';
import Update_Higiene from './components/Higiene/update';

import Read_Delete_Electronico from './components/Electronico/read_Delete'
import Create_Electronico from './components/Electronico/create';
import Update_Electronico from './components/Electronico/update';

import Read_Delete_Comida from './components/Comida/read_Delete'
import Create_Comida from './components/Comida/create';
import Update_Comida from './components/Comida/update';

import Read_Delete_Otros from './components/Otros/read_Delete'
import Create_Otros from './components/Otros/create';
import Update_Otros from './components/Otros/update';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>PackingPal</h2>
        <CategoriaRead/>
        <div>
          <Route exact path="/ropa" component={Read_Delete_Ropa}></Route>
        </div>
        <div>
            <Route exact path='/ropa/update' component = {Update_Ropa}></Route>
        </div>
        <div>
          <Route exact path="/ropa/create" component={Create_Ropa}></Route>
        </div>
        <div>
          <Route exact path="/higiene" component={Read_Delete_Higiene}></Route>
        </div>
        <div>
            <Route exact path='/higiene/update' component = {Update_Higiene}></Route>
        </div>
        <div>
          <Route exact path="/higiene/create" component={Create_Higiene}></Route>
        </div>
        <div>
          <Route exact path="/electronico" component={Read_Delete_Electronico}></Route>
        </div>
        <div>
          <Route exact path='/electronico/update' component = {Update_Electronico}></Route>
        </div>
        <div>
          <Route exact path="/electronico/create" component={Create_Electronico}></Route>
        </div>
        <div>
          <Route exact path="/comida" component={Read_Delete_Comida}></Route>
        </div>
        <div>
          <Route exact path='/comida/update' component = {Update_Comida}></Route>
        </div>
        <div>
          <Route exact path="/comida/create" component={Create_Comida}></Route>
        </div>
        <div>
          <Route exact path="/otros" component={Read_Delete_Otros}></Route>
        </div>
        <div>
            <Route exact path='/otros/update' component = {Update_Otros}></Route>
        </div>
        <div>
          <Route exact path="/otros/create" component={Create_Otros}></Route>
        </div>
        

        
      </div>
    </Router>
  );
}

export default App;
