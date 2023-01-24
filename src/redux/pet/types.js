const GET_PETS ={
    REQUEST: 'GET_PETS_REQUEST',
    RECEIVE: 'GET_PETS_RECEIVE',
    FAILURE: 'GET_PETS_FAILURE'
}

const GET_PET_BY_ID ={
    REQUEST: 'GET_PET_BY_ID_REQUEST',
    RECEIVE: 'GET_PET_BY_ID_RECEIVE',
    FAILURE: 'GET_PET_BY_ID_FAILURE'
}

const UPDATE_PETS ={
    REQUEST: 'UPDATE_PETS_REQUEST',
    RECEIVE: 'UPDATE_PETS_RECEIVE',
    FAILURE: 'UPDATE_PETS_FAILURE'
}

const CREATE_PET ={
    REQUEST: 'CREATE_PET_REQUEST',
    RECEIVE: 'CREATE_PET_RECEIVE',
    FAILURE: 'CREATE_PET_FAILURE'
}

const DELETE_PET ={
    REQUEST: 'DELETE_PET_REQUEST',
    RECEIVE: 'DELETE_PET_RECEIVE',
    FAILURE: 'DELETE_PET_FAILURE'
}

export {
    GET_PETS, 
    UPDATE_PETS, 
    CREATE_PET,
    DELETE_PET,
    GET_PET_BY_ID
}