import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoriaRead from './components/categorias';
import Mochila from './components/mochila';
import Update_Collection from './components/Colletion/update';
import Create_Collection from './components/Colletion/create';
import Read_Delete_Collection from './components/Colletion/read_Delete';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PACKINGPAL</h1>
        <h2>Categorias</h2>
        <CategoriaRead className="" />
        <div className='main'>
          <Mochila />
          <div>
            <Route
              exact
              path="/:collection"
              render={(props) => (
                <Read_Delete_Collection
                  {...props}
                  collection={props.match.params.collection} // Pasar el nombre de la colección como prop
                />
              )}
            />
          </div>
          <div>
            <Route
              exact
              path="/:collection/update"
              render={(props) => (
                <Update_Collection
                  {...props}
                  collection={props.match.params.collection} // Pasar el nombre de la colección como prop
                />
              )}
            />
          </div>
          <div>
            <Route
              exact
              path="/:collection/create"
              render={(props) => (
                <Create_Collection
                  {...props}
                  collection={props.match.params.collection} // Pasar el nombre de la colección como prop
                />
              )}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
