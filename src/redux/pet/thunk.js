import http from '../../api'
import { clearDataActionCreator, createPetFailureActionCreator, createPetReceiveActionCreator, createPetRequestActionCreator, deletePetFailureActionCreator, deletePetReceiveActionCreator, deletePetRequestActionCreator, getPetByIdFailureActionCreator, getPetByIdReceiveActionCreator, getPetByIdRequestActionCreator, getPetsFailureActionCreator, getPetsReceiveActionCreator, getPetsRequestActionCreator, updatePetsFailureActionCreator, updatePetsReceiveActionCreator, updatePetsRequestActionCreator } from './actions';

    // get a pet list
    const getPetsList =() => async (dispatch) => {
        dispatch(getPetsRequestActionCreator())
        try{
            const response = await http.get("/api/pets");
            const transform = response.data.data.map(item =>({
                id:item.id,
                ...item.attributes
            }))
            dispatch(getPetsReceiveActionCreator(transform))
        } catch(e){
            dispatch(getPetsFailureActionCreator(e))
        } 
    };

    // get pet by id 
    const getPetById =(id) => async (dispatch) => {
        dispatch(getPetByIdRequestActionCreator())
        try{
            const response = await http.get(`/api/pets/${id}`);
            const transform = Object.assign({},{
                id:response.data.data.id,
                ...response.data.data.attributes
            })
            dispatch(getPetByIdReceiveActionCreator(transform))
        } catch(e){
            dispatch(getPetByIdFailureActionCreator(e))
        }         
    };

    // create a pet entry
    const createNewPet =(data) => async (dispatch) => {
        dispatch(createPetRequestActionCreator())
        try{
            await http.post("/api/pets", data);
            dispatch(createPetReceiveActionCreator())
        } catch(e){
            dispatch(createPetFailureActionCreator(e))
        } 
    };

    // update a pet entry
    const updatePet =(petId, data) => async (dispatch) => {
        dispatch(updatePetsRequestActionCreator())
        try{
            await http.put(`/api/pets/${petId}`, data);
            dispatch(updatePetsReceiveActionCreator())
        } catch(e){
            dispatch(updatePetsFailureActionCreator(e))
        } 
    };
    
    // delete a pet entry
    const deletePet =(id) => async (dispatch) => {
        dispatch(deletePetRequestActionCreator())
        try{
            await http.delete(`/api/pets/${id}`);
            dispatch(deletePetReceiveActionCreator())
        } catch(e){
            dispatch(deletePetFailureActionCreator(e))
        }         
    };

    //clear data 
     const clearData =()=> dispatch =>dispatch(clearDataActionCreator())



    export default { getPetsList, deletePet, createNewPet, getPetById, updatePet, clearData}



