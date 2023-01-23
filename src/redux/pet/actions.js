import { CREATE_PET, DELETE_PET, GET_PETS, UPDATE_PETS } from "./types";

const getPetsRequestActionCreator =() =>({
    type: GET_PETS.REQUEST
})

const getPetsReceiveActionCreator =(data) =>({
    type: GET_PETS.RECEIVE,
    payload: data
})

const getPetsFailureActionCreator =(err) =>({
    type: GET_PETS.FAILURE,
    payload:err
})

//---------------------------------------------

const updatePetsRequestActionCreator =() =>({
    type: UPDATE_PETS.REQUEST
})

const updatePetsReceiveActionCreator =(data) =>({
    type: UPDATE_PETS.RECEIVE,
    payload: data
})

const updatePetsFailureActionCreator =(err) =>({
    type: UPDATE_PETS.FAILURE,
    payload:err
})

//---------------------------------------------

const createPetRequestActionCreator =() =>({
    type: CREATE_PET.REQUEST
})

const createPetReceiveActionCreator =(data) =>({
    type: CREATE_PET.RECEIVE,
    payload: data
})

const createPetFailureActionCreator =(err) =>({
    type: CREATE_PET.FAILURE,
    payload:err
})

//---------------------------------------------

const deletePetRequestActionCreator =() =>({
    type: DELETE_PET.REQUEST
})

const deletePetReceiveActionCreator =() =>({
    type: DELETE_PET.RECEIVE
})

const deletePetFailureActionCreator =(err) =>({
    type: DELETE_PET.FAILURE,
    payload:err
})

export {
    getPetsReceiveActionCreator,
    getPetsRequestActionCreator,
    getPetsFailureActionCreator,

    updatePetsReceiveActionCreator,
    updatePetsRequestActionCreator,
    updatePetsFailureActionCreator,

    createPetFailureActionCreator,
    createPetReceiveActionCreator,
    createPetRequestActionCreator,

    deletePetRequestActionCreator,
    deletePetFailureActionCreator,
    deletePetReceiveActionCreator
}