import {fireEvent, render, screen} from '@testing-library/react';
import {AuthorizationView} from '../';

const props = {
    isModalOpen: false,
    closeModal: jest.fn(),
    openModal: jest.fn(),
};

describe('Компонент авторизации', () => {
    it('Кнопка открытия окна авторизации отображается', () => {
        render(<AuthorizationView {...props} />);

        expect(screen.getByText('Вход')).toBeVisible();
    });

    it('По клику на кнопку вызывается коллбек открытия модального окна', async () => {
        render(<AuthorizationView {...props} />);

        fireEvent.click(screen.getByText('Вход'));

        expect(props.openModal).toHaveBeenCalledTimes(1);
    });
});
