import { faUser, faRegistered, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useHooks'
import { userProfile } from '../../store/user/Reducers';
import Registration from "../auth/Registeration"
import Login from '../auth/Login';
const SideBarMenus = () => {
    const [showRegister, setShowRegister] = useState(false);
    const user = useAppSelector(state =>state.user);
    const [showLogin,setShowLogin] = useState(false);
    const dispatch =useAppDispatch();

    useEffect(()=>{
        dispatch(userProfile({id: 1, username: "testUser",},
        ));
    },[dispatch]);

    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
      };

      const onClickToggleLogin = () => {
        setShowLogin(!showRegister);
      };
    
    return(
        <React.Fragment>
            <ul>
                <li>
                    <FontAwesomeIcon icon= {faUser} />
                    <span className='menu-name'>
                        {user?.username}
                    </span>
                </li>
                <li>
                <FontAwesomeIcon icon= {faRegistered} />
                    <span onClick={onClickToggleRegister} className='menu-name'>
                        register
                        <Registration isOpen={showRegister}
                        onClickToggle={onClickToggleRegister} />
                    </span>
                </li>
                <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickToggleLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
            </ul>
        </React.Fragment>
    );

};
export default SideBarMenus;