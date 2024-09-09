import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../features/theme/themeSlice";
import { cartSlice } from "../features/theme/cartSlice";
import { pokemonApi } from "../query/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineSlices(themeSlice, cartSlice, pokemonApi);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

setupListeners(store.dispatch);
