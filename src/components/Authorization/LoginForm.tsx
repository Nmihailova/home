import {useState, useCallback} from 'react';

import './styles.css';
import '../mainStyles.css';

type Values = {
    [key: string]: string;
};

const initialValues: Values = {
    email: '',
    password: '',
};

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: any) => void;

    isEmailInvalid: boolean;
    isPasswordInvalid: boolean;
    values: Values;
};

export const LoginFormView = ({onChange, onSubmit, isEmailInvalid, isPasswordInvalid, values}: Props) => (
    <form onSubmit={onSubmit} data-testid="login-form">
        <div className="fieldWrapper">
            <input
                className={`field ${isEmailInvalid ? 'invalid' : ''}`}
                type="email"
                value={values.email}
                required
                id="email"
                onChange={onChange}
                placeholder="Email"
            />
        </div>

        <div className="fieldWrapper">
            <input
                className={`field ${isPasswordInvalid ? 'invalid' : ''}`}
                type="password"
                value={values.password}
                required
                id="password"
                onChange={onChange}
                placeholder="Пароль"
            />
        </div>

        <input className="button submitButton" type="submit" value="Войти" />
    </form>
);

const useEnhance = () => {
    const [values, setValue] = useState(initialValues);
    const [isEmailInvalid, setEmailError] = useState(false);
    const [isPasswordInvalid, setPasswordError] = useState(false);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const key = e.target.id;
            const value = e.target.value;

            console.log({e});

            setValue({...values, [key]: value});

            if (key === 'email') setEmailError(!e.target.validity.valid);
            if (key === 'password') setPasswordError(!e.target.validity.valid);
        },
        [values, setValue],
    );

    const onSubmit = useCallback(
        (e: any) => {
            e.preventDefault();

            setEmailError(!values.email);
            setPasswordError(!values.password);

            if (!values.email || !values.password) {
                console.log(values);

                return;
            }
        },
        [setEmailError, setPasswordError, values],
    );

    return {
        onChange,
        onSubmit,

        isEmailInvalid,
        isPasswordInvalid,
        values,
    };
};

export const LoginForm = () => {
    const {onChange, onSubmit, isEmailInvalid, isPasswordInvalid, values} = useEnhance();

    return (
        <LoginFormView
            onChange={onChange}
            onSubmit={onSubmit}
            isEmailInvalid={isEmailInvalid}
            isPasswordInvalid={isPasswordInvalid}
            values={values}
        />
    );
};
