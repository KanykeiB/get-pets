import { CLEAR_DATA, CREATE_PET, DELETE_PET, GET_PETS, GET_PET_BY_ID, UPDATE_PETS } from "./types"

const initialState ={
    loading:false, 
    list: [],
    data: {},
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
                list: action.payload
            }
        case GET_PETS.FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case GET_PET_BY_ID.REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_PET_BY_ID.RECEIVE:
            return{
                ...state,
                loading:false,
                data: action.payload
            }
        case GET_PET_BY_ID.FAILURE:
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
                data: action.payload
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
        case CLEAR_DATA:
            return{
                ...state,
                data: null,
                loading:false
            }
        default:
            return state
    }
}

export default petsReducer