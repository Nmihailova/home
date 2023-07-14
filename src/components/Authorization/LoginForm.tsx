import {useState, useCallback} from 'react';

import './styles.css';

type Values = {
    [key: string]: string;
};

const initialValues: Values = {
    email: '',
    password: '',
};

export const LoginForm = () => {
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

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    className={isEmailInvalid ? 'fieldInvalid' : ''}
                    type="email"
                    value={values.email}
                    required
                    id="email"
                    onChange={onChange}
                />
            </div>

            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    className={isPasswordInvalid ? 'fieldInvalid' : ''}
                    type="password"
                    value={values.password}
                    required
                    id="password"
                    onChange={onChange}
                />
            </div>

            <input type="submit" value="Войти" />
        </form>
    );
};