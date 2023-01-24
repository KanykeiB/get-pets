import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PetForm from '../../../containers/pet-form';
import { getPet, isLoading } from '../../../redux/pet/selectors';
import petOperations from '../../../redux/pet/thunk'

const EditPetPage = () => {
    const {id} = useParams()
    const getPetNow = useSelector(getPet)
    const dispatch = useDispatch()
    const {getPetById} = petOperations
    const isLoadingPet = useSelector(isLoading)
    useEffect(()=>{
            dispatch(petOperations.getPetById(id))
    }, [])
    console.log(getPetNow)
    // if(isLoadingPet){
    // return <p>'Loading'</p> 
    // }
    return (
        <div>
            <PetForm 
            id={id}
            >Edit Pet</PetForm>
        </div>
    );
};

export default EditPetPage;