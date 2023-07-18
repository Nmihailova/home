import {Authorization} from '../Authorization';

import './styles.css';

export const Header = () => (
    <header>
        <h1 className="header-text">~ Кондитерская ~</h1>
        <Authorization />
    </header>
);
