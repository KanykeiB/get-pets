import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PetForm from '../../../containers/pet-form';
import { getPet, isLoading } from '../../../redux/pet/selectors';
import petOperations from '../../../redux/pet/thunk'

const EditPetPage = () => {
    const {id} = useParams()
    //selectors
    const getPetNow = useSelector(getPet)
    const isLoadingPet = useSelector(isLoading)
    //dispatch
    const dispatch = useDispatch()
    const {getPetById, clearData} = petOperations

    useEffect(()=>{
        dispatch(petOperations.getPetById(id))
        return()=>{
            dispatch(petOperations.clearData())
        }
    }, [])
    if (isLoadingPet) {
        return <p>Loading...</p> 
    }
    return (
        <div>
            <PetForm 
                id={id}
                >Edit Pet
            </PetForm>
        </div>
    );
};

export default EditPetPage;