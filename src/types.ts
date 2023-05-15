export type Recipe = {
    title: string;
    previewText: string;
    picture: string;
};

export type CategoryRecipe = {
    categoryName: string;
    recipes: Recipe[];
};

export type RecipesList = {
    [key: string]: CategoryRecipe;
};
