import React from 'react';
import PetForm from '../../../containers/pet-form';

const EditPetPage = () => {
    const handleEditPet=()=>{

    }
    return (
        <div>
            <PetForm onChange={handleEditPet}>Edit Pet</PetForm>
        </div>
    );
};

export default EditPetPage;