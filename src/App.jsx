import React, {useEffect} from 'react';
import './App.css';
import PetList from './containers/pet-list';
import {Route} from 'react-router-dom'
import { Switch } from 'react-router-dom';
import AddPetPage from './pages/Pets/AddPetPage';
import EditPetPage from './pages/Pets/EditPetPage';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={PetList}/>
        <Route exact path='/add-new-pet' component={AddPetPage}/>
        <Route exact path='/edit-pet/:id' component={EditPetPage}/>
      </Switch>
      <Footer/>
      
    </div>
  );
}

export default App;
