import {useSelector} from 'react-redux';

import {selectCurrentRecipe} from './selectors';

import {Menu} from './components/Menu';
import {Display} from './components/Display';

import './App.css';

const App = () => {
    const currentRecipe = useSelector(selectCurrentRecipe);

    return (
        <div>
            <Menu />
            {currentRecipe && <Display currentRecipe={currentRecipe} />}
        </div>
    );
};

export default App;
