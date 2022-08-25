import React from "react";
import './TakeNoteTwo.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

function TakeNoteTwo()
{
    return (
        <div className="takenotetwo">
            <div className="titletnt">
                <input type="text" placeholder="Title" />
                <div className="pin"><PushPinOutlinedIcon fontSize="medium" /></div>
            </div>
            <input type="text" placeholder="Take a note..." />
            <div className="icontnt">
                <AddAlertOutlinedIcon  fontSize="smaller"/>
                <PersonAddAltOutlinedIcon fontSize="smaller"/>
                <ColorLensOutlinedIcon fontSize="smaller"/>
                <ImageOutlinedIcon fontSize="smaller"/>
                <ArchiveOutlinedIcon fontSize="smaller"/>
                <MoreVertOutlinedIcon fontSize="smaller"/>
                <UndoOutlinedIcon fontSize="smaller"/>
                <RedoOutlinedIcon fontSize="smaller"/>
                <h5>Close</h5>
            </div>
        </div>
    )
}

export default TakeNoteTwo;