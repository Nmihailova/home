import {LoginForm} from './LoginForm';

import './styles.css';

type Props = {
    onClose: () => void;
    isOpen: boolean;
};

export const LoginModalWindow = ({onClose, isOpen}: Props) => (
    <>
        {isOpen ? (
            <div className="loginModal" data-testid="login-modal">
                <div className="shadow"></div>
                <div className="window">
                    <button onClick={onClose} className="close" data-testid="close-button"></button>
                    <LoginForm />
                </div>
            </div>
        ) : null}
    </>
);
