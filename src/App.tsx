import {DesertsList} from './components/DesertsList';
import {Authorization} from './components/Authorization';

import './App.css';

const App = () => {
    return (
        <div className="root-element">
            <DesertsList />
            <Authorization />
        </div>
    );
};

export default App;
