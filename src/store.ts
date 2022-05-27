import {configureStore} from '@reduxjs/toolkit';

import currentRecipeSlice from './features/recipeBlockSlice';

export const store = configureStore({
    reducer: {
        currentRecipe: currentRecipeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
