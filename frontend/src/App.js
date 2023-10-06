import './App.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import CategoriaRead from './components/categorias';
import Mochila from './components/mochila';

import Update_Ropa from './components/Ropa/update';
import Create_Ropa from './components/Ropa/create';
import Read_Delete_Ropa from './components/Ropa/read_Delete'


import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  return (
    <Router>
      <div className="App">
        <h1>PACKINGPAL</h1>
        <h2>Categorias</h2>
        <CategoriaRead className=""/>
        
      </div>
    </Router>
  );
}

export default App;
