import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authReducer'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isLoggedIn &&
        (
          <nav>
            <ul>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={logOutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
        )
      }
    </header>
  );
};

export default Header;