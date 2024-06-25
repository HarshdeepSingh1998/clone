import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import userReducer from './userSlice' // Make sure this reducer is written in TypeScript
import productReducer from './productSlice'
import machineReducer from './machineSlice'
import contractReducer from './contractSlice'
import currencyReducer from './currencySlice'

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>

// Define the persist config with the appropriate type
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage
}

// Combine reducers. If you have more reducers, include them here
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  machine: machineReducer,
  contract: contractReducer,
  currency: currencyReducer
})

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// Create a persistor
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
