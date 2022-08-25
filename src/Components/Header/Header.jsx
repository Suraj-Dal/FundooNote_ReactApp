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

function HeaderComp() {
    return (
        <header className="headerhc">
            <div className="logohc">
                <MenuIcon fontSize="medium" />
                <img src={keep} alt="Fundoo Notes" style={{ width: "40px", height: "40px" }} />
                <h4>Keep</h4>
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

export default HeaderComp;