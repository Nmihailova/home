import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import {LoginModalWindow} from '../LoginModalWindow';

const props = {
    isOpen: true,
    onClose: jest.fn(),
};

describe('LoginModalWindow', () => {
    it('Рендерится модальное окно авторизации со всем контентом', () => {
        render(<LoginModalWindow {...props} />);

        const closeButton = screen.getByTestId('close-button');
        const emailInputElement = screen.getByPlaceholderText(/Email/i);
        const passwordInputElement = screen.getByPlaceholderText(/Пароль/i);
        const submitButton = screen.getByDisplayValue(/Войти/i);

        expect(closeButton).toBeVisible();
        expect(emailInputElement).toBeVisible();
        expect(passwordInputElement).toBeVisible();
        expect(submitButton).toBeVisible();
    });

    it('По клику на крестик вызывается коллбек закрытия модального окна', async () => {
        const onClose = jest.fn();

        render(<LoginModalWindow isOpen={true} onClose={onClose} />);

        const closeBtn = screen.getByTestId('close-button');
        fireEvent.click(closeBtn);

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
