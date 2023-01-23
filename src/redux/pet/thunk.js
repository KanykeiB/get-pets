import http from '../../api'
import { createPetFailureActionCreator, createPetReceiveActionCreator, createPetRequestActionCreator, deletePetFailureActionCreator, deletePetReceiveActionCreator, deletePetRequestActionCreator, getPetsFailureActionCreator, getPetsReceiveActionCreator, getPetsRequestActionCreator, updatePetsFailureActionCreator, updatePetsReceiveActionCreator, updatePetsRequestActionCreator } from './actions';

    //get a pet list
    const getPetsList =() => async (dispatch) => {
        dispatch(getPetsRequestActionCreator())
        try{
            const response = await http.get("/api/pets");
            const data = Object.values(response.data.data);
            setTimeout(() => {
                dispatch(getPetsReceiveActionCreator(data))
            }, 2000)
            console.log('hello')
        } catch(e){
            dispatch(getPetsFailureActionCreator(e))
        } 
    };

    // // create a pet entry
    // const createNewPet =() => async (dispatch) => {
    //     dispatch(createPetRequestActionCreator())
    //     try{
    //         await http.post("/api/pets", data);
    //         setTimeout(() => {
    //             dispatch(createPetReceiveActionCreator(data))
    //         }, 2000)
    //     } catch(e){
    //         dispatch(createPetFailureActionCreator(e))
    //     } 
    // };
    // // update a pet entry
    // const updatePet =(petId) => async (dispatch) => {
    //     dispatch(updatePetsRequestActionCreator())
    //     try{
    //         await http.put(`/api/pets/${petId}`, data);
    //         setTimeout(() => {
    //             dispatch(updatePetsReceiveActionCreator(data))
    //         }, 2000)
    //     } catch(e){
    //         dispatch(updatePetsFailureActionCreator(e))
    //     } 
    // };
    
    // // delete a pet entry
    // const deletePet =(petId) => async (dispatch) => {
    //     dispatch(deletePetRequestActionCreator())
    //     try{
    //         await http.delete(`/api/pets/${petId}`);
    //         setTimeout(() => {
    //             dispatch(deletePetReceiveActionCreator(data))
    //         }, 2000)
    //     } catch(e){
    //         dispatch(deletePetFailureActionCreator(e))
    //     }         
    // };
    // // change navigation value
    // const changeNavValue = (value) => {
    //     set_nav_value(value);
    // };
    // // get pet id value
    // const getPetId = (id) => {
    //     setPetId(id);
    // };

    export default { getPetsList}
    //  updatePet, createNewPet, deletePet



