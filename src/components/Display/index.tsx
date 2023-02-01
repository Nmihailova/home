import {useSelector} from 'react-redux';

import type {Recipe} from '../../types';

type Props = {
    currentRecipe: Recipe;
};

export const Display = ({currentRecipe}: Props) => (
    <>
        <h1>{currentRecipe.title}</h1>
        <div>{currentRecipe.text}</div>
    </>
);
