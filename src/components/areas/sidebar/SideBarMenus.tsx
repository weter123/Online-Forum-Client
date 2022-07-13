import { faUser, faRegistered, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useHooks'
import { userProfile } from '../../../store/user/Reducers';
import Registration from "../../auth/Registeration"
import Login from '../../auth/Login';
import Logout from '../../auth/Logout';
import "./SideBarMenus.css";
const SideBarMenus = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin,setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const user = useAppSelector(state =>state.user);
    
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

    const onClickToggleLogout = () => {
        setShowLogout(!showRegister);
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

                 <li>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span onClick={onClickToggleLogout} className="menu-name">
                        logout
                    </span>
                     <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
                 </li>
            </ul>
        </React.Fragment>
    );

};
export default SideBarMenus;