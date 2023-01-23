import React, {useEffect} from 'react';
import './App.css';
import Interface from './components/Interface';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import postOperations from './redux/pet/thunk'


function App() {
//   const petsList = useSelector(state=> state.petList.data)
//   const dispatch = useDispatch()
//   const {getPetsList, updatePet, createNewPet, deletePet} = postOperations

//   useEffect(()=>{
//     dispatch(postOperations.getPetsList())
//   }, [])
  
// console.log(petsList, 'petlist')

  return (
    <div className="App">
      <Interface/>
    </div>
  );
}

export default App;
