import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import authOperations from 'redux/auth/auth-operations';
import css from 'components/LoginForm/LoginForm.module.css'

export default function LoginForm ({ onSubmit }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.login({ email, password }));
        resetForm();
    }
    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit} className={css.form}>
                
                <label htmlFor={emailId} className={css.label}>Email</label>
                <input
                    className={css.input}
                    id={emailId}
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleChange}
                />
                 <label htmlFor={passwordId} className={css.label}>Password</label>
                <input
                    className={css.input}
                    id={passwordId}
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={handleChange}
                />
                <button type='submit' className={css.button}>Authorization</button>
            </form>
        </div>  
    )

}
