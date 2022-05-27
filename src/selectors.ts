import type {RootState} from './store';

export const selectCurrentRecipe = (state: RootState) => state.currentRecipe;
