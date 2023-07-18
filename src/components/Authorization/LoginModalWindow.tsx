import {LoginForm} from './LoginForm';

import './styles.css';

type Props = {
    onClose: () => void;
    isOpen: boolean;
};

export const LoginModalWindow = ({onClose, isOpen}: Props) => {
    return (
        <div className={`loginModal ${isOpen ? 'loginModal--active' : 'loginModal--closed'}`}>
            <div className="shadow"></div>
            <div className="window">
                <button onClick={onClose} className="close"></button>
                <LoginForm />
            </div>
        </div>
    );
};
