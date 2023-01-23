import React from 'react';
    
// custom component
import CreatePetEntry from '../CreatePerEntry';
import EditPetEntry from '../EditPerEntry';
import PetList from '../PetList';

// contexts
import { usePetContext } from '../../contexts';
import Form from '../../containers/form';

const Interface = () => {
    const { nav_value } = usePetContext();
    
    switch (nav_value) {
        case "PetList":
            return <PetList/>
        case "AddPet":
            return <Form>Create per entry</Form>
            // <CreatePetEntry/>
        case "EditPet":
            return <Form>Edit per entry</Form>
            // <EditPetEntry/>
        default:
            return <PetList/>
    };
};
export default Interface;