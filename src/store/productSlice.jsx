import { createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'

})

const initialState = {
   status:STATUSES.IDLE,
   data:[] 
}
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts(state,action){
           state.data =  action.payload

        },
        setStatus(state,action){
            state.status= action.payload

        }


    }
})
export const {setProducts,setStatus} = productSlice.actions
export default productSlice.reducer

// ===========thunks===============
export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        const prop = getState()
        console.log(prop,"getState")
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data,"product data")
            dispatch(setProducts(data))
            dispatch(setStatus(STATUSES.IDLE))

        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))

        }

    }

}