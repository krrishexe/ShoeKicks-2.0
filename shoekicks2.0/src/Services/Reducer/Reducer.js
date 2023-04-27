import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants"

const initialState ={
    cartData:[]
}
const state = initialState
export default function items(initialState,action){

    switch(action.type){
        case ADD_TO_CART :
            return{
                ...state ,
                cartData:action.data
            }
            
        case REMOVE_FROM_CART :
            return{
                ...state,
                cartData:action.data
            }
        default :
            return state
    }
}