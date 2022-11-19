import { ThreeDots } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
        <ThreeDots 
            height="50" 
            width="100" 
            radius="9"
            color='red' 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>
  )
}