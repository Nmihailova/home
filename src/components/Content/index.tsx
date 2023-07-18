import {Routes, Route} from 'react-router-dom';

import {Home} from '../Home';
import {Catalog} from '../Catalog';

export const Content = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    </main>
);
