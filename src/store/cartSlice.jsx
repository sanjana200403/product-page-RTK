import { createSlice } from "@reduxjs/toolkit"


const initialState = []
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            console.log(action.payload,"add")

            state.push(action.payload)

        },
        remove(state,action){
            console.log(action.payload,"remove")
         return state.filter(item=>item.id !== action.payload)

        }
    }

})
export const   {add,remove} = cartSlice.actions
export default cartSlice.reducer