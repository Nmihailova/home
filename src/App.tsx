import {Content} from './components/Content';
import {Menu} from './components/Menu';
import {Header} from './components/Header';

import './App.css';

const App = () => {
    return (
        <div className="root-element">
            <Header />
            <Menu />
            <Content />
        </div>
    );
};

export default App;
