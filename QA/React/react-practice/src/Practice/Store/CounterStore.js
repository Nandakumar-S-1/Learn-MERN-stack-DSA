import {createSlice} from '@reduxjs/toolkit'
const CounterSlie = createSlice({
    name:'counter',
    initialState:{val:0},
    reducers:{
        inc:(state)=>{state.val+1},
        dec:(state)=>{state.val-1}
    }
})

export const {inc,dec} = CounterSlie.actions()
export default CounterSlie.reducer