import {Link} from 'react-router-dom';

import './styles.css';

export const Menu = () => (
    <ul className="menu">
        <li>
            <Link className="menu-item" to="/">
                О нас
            </Link>
        </li>
        <li>
            <Link className="menu-item" to="/catalog">
                Десерты
            </Link>
        </li>
    </ul>
);
