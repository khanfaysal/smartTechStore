import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import userReducer from './features/user/userSlice';
import { api } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        cart: counterReducer,
        product: productReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;