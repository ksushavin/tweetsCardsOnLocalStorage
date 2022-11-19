import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from "pages/RegisterPage/RegisterPage.module.css"

export default function RegisterPage() {
    return (
        <div className={css.container}>
        <h1 className={css.text}>Registration</h1>
            <RegisterForm />
        </div>
    )
}