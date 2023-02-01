import {useSelector} from 'react-redux';

import type {Recipe} from '../../types';

import './styles.css';

type Props = {
    currentRecipe: Recipe;
};

export const Display = ({currentRecipe}: Props) => (
    <div className="display">
        <h1>{currentRecipe.title}</h1>
        <div>{currentRecipe.text}</div>
    </div>
);
