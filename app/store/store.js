import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import homeReducer from './home/homeSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const authPersistReducer = persistReducer(persistConfig, authReducer)
const homePersistReducer = persistReducer(persistConfig, homeReducer)

export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        home:homePersistReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
      warningThreshold: 100, 
    }),
})

export const persistor = persistStore(store)
