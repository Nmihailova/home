import {useState} from 'react';

import {RECIPES} from '../../mocks/data';

import {RecipesList} from './RecipesList';

import './style.css';

export const Category = ({category}: {category: string}) => {
    const [isRecipesListVisible, setResipesListVisible] = useState(false);

    return (
        <li onClick={() => setResipesListVisible(!isRecipesListVisible)}>
            {RECIPES[category].categoryName}
            {isRecipesListVisible && <RecipesList category={category} />}
        </li>
    );
};
