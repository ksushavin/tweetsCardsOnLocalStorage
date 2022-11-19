import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import authOperations from 'redux/auth/auth-operations';
import css from 'components/RegisterForm/RegisterForm.module.css'

export default function RegisterForm () {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case "name":
                return setName(value);
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
        dispatch(authOperations.signup({ name, email, password }));
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit} className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name</label>
                <input
                    className={css.input}
                    id={nameId}
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={handleChange}
                />
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
            <button type='submit' className={css.button}>Registration</button>
        </form>
        </div>



        
    )

}
