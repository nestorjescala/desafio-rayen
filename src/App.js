import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import ListTutorial from './tutoriales/ListTutorial';
import AddTutorial from './tutoriales/AddTutorial';
import EditTutorial from './tutoriales/EditTutorial';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>            
            <Route path="/agregar" component={AddTutorial} />
            <Route path="/editar/:id" component={EditTutorial} />
            <Route path="/" component={ListTutorial} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
