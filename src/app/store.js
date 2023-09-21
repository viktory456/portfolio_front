import { configureStore } from "@reduxjs/toolkit"
import {api} from '../features/api/api'
import { setupListeners } from "@reduxjs/toolkit/dist/query"



export const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,

    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)