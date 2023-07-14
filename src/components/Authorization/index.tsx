import {useState, useCallback} from 'react';

import {LoginModalWindow} from './LoginModalWindow';

export const Authorization = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    return (
        <>
            <button onClick={openModal}>Вход</button>
            <LoginModalWindow isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};
