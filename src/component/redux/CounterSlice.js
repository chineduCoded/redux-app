import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
        increaseByamount: (state, action) => {
            state.value += action.payload
        },

    },
})

export const { increase, decrease, increaseByamount} = CounterSlice.actions

export default CounterSlice.reducer