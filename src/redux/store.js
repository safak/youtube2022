import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage for persistence


const stripe = require('stripe')('pk_test_51Nh8aOFJOqhv3053x1RQF8aROyyt8AXUWxtY5VHvp0ZUKeYlu24GRux3TC8bALDJ3o68h10UshxFNIxoeUvXDqHq008yG8u5Lr');

// Configuration for Redux Persist
const persistConfig = {
  key: "root", // Key to identify the root of the persisted state
  version: 1,
  storage, // Storage method (local storage in this case)
};

// Create a persisted reducer using Redux Persist
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: persistedReducer, // Using the persisted reducer for the 'cart' slice
  },
  middleware: (getDefaultMiddleware) =>
   // Configure serializability checking for actions
    getDefaultMiddleware({
            // Ignore these specific action types when checking serializability
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor to persist the store using Redux Persist
export let persistor = persistStore(store);
