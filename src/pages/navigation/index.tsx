import React from 'react';

import job_overview_icon from '../../assets/icons/job_overview_icon.png';
import ai_manager_icon from '../../assets/icons/ai_manager_icon.png';
import dataset_manager_icon from '../../assets/icons/dataset_manager_icon.png';
import user_manager_icon from '../../assets/icons/user_manager_icon.png';
import log_out_icon from '../../assets/icons/log_out_icon.png';

import './style.css';

import NavigationPoint from '../../components/navigationPoint';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth.ts';
import { RootState } from '../../store';


const Navigation = () => {
    const isLoggedIn = useSelector<RootState, boolean>(state => state.auth.isLoggedIn);
    const currentUser = useSelector<RootState, string>(state => state.auth.name);

    const dispatch = useDispatch();
    const logout = () => {
        const logOutName = "...";
        dispatch(authActions.logout({logOutName}));
    }

    return(
        <nav>
            <div className="navigationLinks">
                <div className="navigationLink" id='currentUserMenuPoint'>
                    <p id='currentUser'>{currentUser}</p>
                </div>
                {!isLoggedIn ? 
                null :
                <div className='menu-links'>
                    <NavigationPoint link="/joboverview" icon={job_overview_icon} alt="joboverview-icon" />
                    <NavigationPoint link="/aimanager" icon={ai_manager_icon} alt="aimanager-icon" />
                    <NavigationPoint link="/datasetmanager" icon={dataset_manager_icon} alt="datasetmanager-icon" />
                    <NavigationPoint link="/usermanager" icon={user_manager_icon} alt="usermanager-icon" />
                </div>}
                <div className="navigationLink" id='logOut' onClick={logout}>
                    <img src={log_out_icon} alt='joboverview-icon'></img>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
