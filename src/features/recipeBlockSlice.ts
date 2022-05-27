import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {Recipe} from '../types';

export type CurrentRecipeState = Recipe | null;

const initialState = null as CurrentRecipeState;

export const currentRecipeSlice = createSlice({
    name: 'currentRecipe',
    initialState,
    reducers: {
        setCurrentRecipe: (state, action: PayloadAction<CurrentRecipeState>) => {
            state = action.payload;
            return state;
        },
    },
});

export const {setCurrentRecipe} = currentRecipeSlice.actions;

export default currentRecipeSlice.reducer;
