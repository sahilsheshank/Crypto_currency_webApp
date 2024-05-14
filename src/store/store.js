import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../cryptoApi/CryptoApi";
import {NewsApi} from '../newsApi/NewsApi'
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [NewsApi.reducerPath]:NewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware).concat(NewsApi.middleware),
});