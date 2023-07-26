import {useState, useCallback} from 'react';

import {LoginModalWindow} from './LoginModalWindow';

import '../mainStyles.css';

type Props = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

export const AuthorizationView = ({isModalOpen, openModal, closeModal}: Props) => (
    <div className="authorization">
        <button className="button loginModalButton" onClick={openModal}>
            Вход
        </button>
        <LoginModalWindow isOpen={isModalOpen} onClose={closeModal} />
    </div>
);

export const useEnhance = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    return {
        isModalOpen,

        openModal,
        closeModal,
    };
};

export const Authorization = () => {
    const {isModalOpen, openModal, closeModal} = useEnhance();

    return <AuthorizationView isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />;
};
