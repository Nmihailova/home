import {useState, useCallback} from 'react';

import {LoginModalWindow} from './LoginModalWindow';

import '../mainStyles.css';

export const Authorization = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    return (
        <div className="authorization">
            <button className="button loginModalButton" onClick={openModal}>
                Вход
            </button>
            <LoginModalWindow isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};
