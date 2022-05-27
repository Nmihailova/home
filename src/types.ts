export type Recipe = {
    title: string;
    text: string;
    picture?: string;
};

export type CategoryRecipe = {
    categoryName: string;
    recipes: Recipe[];
};

export type RecipesList = {
    [key: string]: CategoryRecipe;
};
