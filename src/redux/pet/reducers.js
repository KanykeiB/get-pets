import { CREATE_PET, DELETE_PET, GET_PETS, UPDATE_PETS } from "./types"

const initialState ={
    loading:false, 
    data: [],
    attributes: {},
    error: null
}
const petsReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_PETS.REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_PETS.RECEIVE:
            return{
                ...state,
                loading:false,
                data: action.payload
            }
        case GET_PETS.FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case UPDATE_PETS.REQUEST:
            return{
                ...state,
                loading:true
            }
        case UPDATE_PETS.RECEIVE:
            return{
                ...state,
                loading:false,
                attributes: action.payload
            }
        case UPDATE_PETS.FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case CREATE_PET.REQUEST:
            return{
                ...state,
                loading:true
            }
        case CREATE_PET.RECEIVE:
            return{
                ...state,
                loading:false,
                data: action.payload
            }
        case CREATE_PET.FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case DELETE_PET.REQUEST:
            return{
                ...state,
                loading:true
            }
        case DELETE_PET.RECEIVE:
            return{
                ...state,
                loading:false,
            }
        case DELETE_PET.FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state
    }
}

export default petsReducer