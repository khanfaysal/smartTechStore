import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';

export const store = configureStore({
    reducer: {
        cart: counterReducer,
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;