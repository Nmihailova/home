import {useState} from 'react';

import {RECIPES} from '../../mocks/data';

import {PreviewCard} from '../Preview';

import './style.css';
import '../mainStyles.css';

export const Catalog = () => (
    <div className="desertsList">
        {RECIPES.map(desert => (
            <PreviewCard {...desert} />
        ))}
    </div>
);
