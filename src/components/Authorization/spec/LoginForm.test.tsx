import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import {LoginFormView} from '../LoginForm';

const props = {
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    isEmailInvalid: false,
    isPasswordInvalid: false,
    values: {
        email: '',
        password: '',
    },
};

describe('LoginForm', () => {
    it('Поля ввода доступны для ввода текста', () => {
        const onChangeMock = jest.fn();
        render(<LoginFormView {...{...props, onChange: onChangeMock}} />);

        const emailInputElement = screen.getByPlaceholderText(/Email/i);
        const passwordInputElement = screen.getByPlaceholderText(/Пароль/i);

        fireEvent.change(emailInputElement, {
            target: {
                value: 'email-address@domen.ru',
            },
        });
        expect(onChangeMock).toHaveBeenCalledTimes(1);

        fireEvent.change(passwordInputElement, {
            target: {
                value: 'Password12345',
            },
        });
        expect(onChangeMock).toHaveBeenCalledTimes(2);
    });

    it('По клику на кнопку "Войти" происходит вызов onSubmit', () => {
        const onSubmitMock = jest.fn();

        render(<LoginFormView {...{...props, onSubmit: onSubmitMock}} />);

        const submitButton = screen.getByTestId('login-form');
        fireEvent.submit(submitButton);

        expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
});
