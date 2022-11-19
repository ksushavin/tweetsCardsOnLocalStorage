import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import LoginForm from 'components/LoginForm/LoginForm';
import css from "pages/LoginPage/LoginPage.module.css"

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = (data) => {
    dispatch(authOperations.login(data));
  }
  return (
    <div className={css.container}>
      <h1 className={css.text}>Authorization</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}