import { configureStore } from "@reduxjs/toolkit";
import CounterSlie from './CounterStore'

export const store = configureStore({
    reducer:{
        counter:CounterSlie
    }
})