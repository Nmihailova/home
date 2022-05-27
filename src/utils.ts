import {RecipesList} from './types';

export const getCategoryNames = (recipesList: RecipesList): string[] => {
    const categories = [];

    for (let key in recipesList) {
        categories.push(recipesList[key].categoryName);
    }

    return categories;
};
