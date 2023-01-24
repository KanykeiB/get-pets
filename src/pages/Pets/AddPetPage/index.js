import React from 'react';
import { useDispatch } from 'react-redux';
import PetForm from '../../../containers/pet-form';
import petOperations from '../../../redux/pet/thunk'

const AddPetPage = () => {
    // const dispatch = useDispatch()
    // const {deletePet, getPetsList, createNewPet} = petOperations
    // const handleAddPet =()=>{
    //     dispatch(createNewPet())
    //     console.log('jojo')
    // }
    return (
        <div>
            <PetForm>Add Pet</PetForm>
        </div>
    );
};

export default AddPetPage;