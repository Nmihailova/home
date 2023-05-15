import {RECIPES} from '../../mocks/data';

import {PreviewCard} from '../Preview';

import './style.css';

export const DesertsList = () => {
    return (
        <div className="desertsList">
            {RECIPES.map(desert => (
                <PreviewCard {...desert} />
            ))}
        </div>
    );
};
