import {RECIPES} from '../../mocks/data';

import {Category} from './Category';

import './style.css';

const categories = Object.keys(RECIPES);

export const Menu = () => (
    <aside className="menu">
        <ul>
            {categories.map(category => (
                <Category category={category} />
            ))}
        </ul>
    </aside>
);
