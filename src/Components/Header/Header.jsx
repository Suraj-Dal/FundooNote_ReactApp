import React from "react";
import keep from '../../Assets/keep.png'
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import {connect} from 'react-redux';

function HeaderComp(props) {
    const handleDrawer = () =>
    {
        props.listenToHeader()
    }
    return (
        <header className="headerhc">
            <div className="logohc">
                <MenuIcon fontSize="medium" onClick={handleDrawer} />
                <img src={keep} alt="Fundoo Notes" style={{ width: "40px", height: "40px" }} />
                <div>{props.title}</div>
            </div>
            <div className="searchhc">
                <SearchIcon fontSize="medium" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="opthc">
                <RefreshIcon  fontSize="medium" />
                <ViewAgendaOutlinedIcon fontSize="medium" />
                <SettingsIcon fontSize="medium" />
            </div>
            <div class="userhc">
                <AppsRoundedIcon fontSize="medium" />
                <AccountCircleIcon fontSize="large" />
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
	return {
		title: state.drawerReducer.title,
	};
};

export default connect (mapStateToProps)(HeaderComp);