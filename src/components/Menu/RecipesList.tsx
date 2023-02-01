import {useDispatch} from 'react-redux';
import {RECIPES} from '../../mocks/data';

import {setCurrentRecipe} from '../../features/recipeBlockSlice';
import type {Recipe} from '../../types';

type Props = {
    category: string;
};

type SelectRecipeProps = {
    title: string;
    text: string;
    e: React.MouseEvent<HTMLLIElement, MouseEvent>;
};

export const RecipesList = ({category}: Props) => {
    const dispatch = useDispatch();

    const selectRecipe = ({title, text, e}: SelectRecipeProps) => {
        e.stopPropagation();
        dispatch(setCurrentRecipe({title, text}));
    };

    const recipesList = RECIPES[category].recipes;

    return (
        <ul>
            {recipesList.map(({title, text}) => (
                <li onClick={e => selectRecipe({title, text, e})}>{title}</li>
            ))}
        </ul>
    );
};
