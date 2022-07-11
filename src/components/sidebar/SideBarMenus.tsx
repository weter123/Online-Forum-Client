import { faUser, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useHooks'
import { userProfile } from '../../store/user/Reducers';
const SideBarMenus = () => {
    const user = useAppSelector(state =>state.user);
    const dispatch =useAppDispatch();

    useEffect(()=>{
        dispatch(userProfile({id: 1, username: "testUser",},
        ));
    },[dispatch]);

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
                    <span className='menu-name'>
                        register
                    </span>
                </li>
            </ul>
        </React.Fragment>
    );

};
export default SideBarMenus;