import { createSlice } from "@reduxjs/toolkit";
let array
let price
if(localStorage.getItem("delivery")!=undefined){
    array=JSON.parse(localStorage.getItem('delivery'))
    if(array.length===0){
        price=0
    }else{
        price=array.map(item=>item.price).reduce((acc,tot)=>acc+tot)
    }
}else{
    array=[]
}
export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        count:array.length,
        some:price,
       
    },
    reducers:{
        increaseCart:(state)=>{
            if(localStorage.getItem("delivery")!=undefined){
                const arr=JSON.parse(localStorage.getItem('delivery'))
                state.count=arr.length
            }
        },
        increaseTotal:(state,actions)=>{
            state.some=actions.payload
        }
    }
})
export const {increaseCart,increaseTotal}=cartSlice.actions
export default cartSlice.reducer