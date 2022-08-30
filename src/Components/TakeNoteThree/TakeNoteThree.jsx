import React from "react";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './TakeNoteThree.css'
import ColorPopper from "../ColorPopper/ColorPopper";
import { setColor, setNotes } from "../../Services/DataService";

function TakeNoteThree({note}) {
    const [viewNote, setViewNote] = React.useState(true)

    if (viewNote)
    {
        return (
            <div className="takenotethree" onMouseEnter={() => setViewNote(false)} style={{backgroundColor: note.color}}>
            <div className="notetnh">
                <div className="titletnh">
                    <h4>{note.title}</h4>
                </div>
                <h4>{note.description}</h4>
            </div>
        </div>
        )
    }
    else
    {
        return (
            <div className="takenotethree" onMouseLeave={() => setViewNote(true)} style={{backgroundColor: note.color}}>
            <div className="notetnh">
                <div className="titletnh">
                    <h4>{note.title}</h4>
                    <div className="pin"><PushPinOutlinedIcon fontSize="small" /></div>
                </div>
                <h4>{note.description}</h4>
                <div className="icontnh">
                    <AddAlertOutlinedIcon fontSize="smaller" />
                    <PersonAddAltOutlinedIcon fontSize="smaller" />
                    <ColorPopper action="update" id={note.noteID}/>
                    <ImageOutlinedIcon fontSize="smaller" />
                    <ArchiveOutlinedIcon fontSize="smaller" />
                    <MoreVertOutlinedIcon fontSize="smaller" />
                </div>
            </div>
        </div>
        )
    }
}

export default TakeNoteThree;
