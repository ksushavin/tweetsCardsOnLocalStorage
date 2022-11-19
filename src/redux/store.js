import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

//reducers
import { filterReducer } from "./filter/filter-slice";
import { contactReducer } from "./contacts/contact-slice";
import { authReducer } from "./auth/auth-slice";



const persistConfig = {
    key: "token",
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);



























// export const store = configureStore({

//     auth: authReducer,
//     contacts: contactReducer,
//     filter: filterReducer,
// });

// const rootReducer = combineReducers({
//     contacts: contactReducer,
//     filter: filterReducer
// })

// const persistedReducer = persistReducer(authPersistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     rootReducer
//   },

//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }
//     ),

// });

// export const persistor = persistStore(store);
// export default store;







// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// //reducers
// import { filterReducer } from "./filter-slice";
// import { contactSlice } from "./contact-slice";


// const rootReducer = combineReducers({
//     contacts: contactSlice.reducer,
//     filter: filterReducer
// })

// export const store = configureStore({
//   reducer: rootReducer,
// });



