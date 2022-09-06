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
import { setArchive, setColor, setNotes, setPin } from "../../Services/DataService";

function TakeNoteThree({note}) {
    const [viewNote, setViewNote] = React.useState(true)
    const [bgcolor, setBgolor] = React.useState(note.color)

    const listenToColorPopper = (color) => {
         setColor(color, note.noteID)
         setBgolor(color)
    }

    const isArchive = () => {
        setArchive(note.noteID)
    }

    const isPin = () => {
        setPin(note.noteID)
    }

    if (viewNote)
    {
        return (
            <div className="takenotethree" onMouseEnter={() => setViewNote(false)}>
            <div className="notetnh" style={{backgroundColor: note.color}}>
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
            <div className="takenotethree" onMouseLeave={() => setViewNote(true)} >
            <div className="notetnh" style={{backgroundColor: note.color}}>
                <div className="titletnh">
                    <h4>{note.title}</h4>
                    <div className="pin"><PushPinOutlinedIcon fontSize="small" onClick={isPin}/></div>
                </div>
                <h4>{note.description}</h4>
                <div className="icontnh">
                    <AddAlertOutlinedIcon fontSize="smaller" />
                    <PersonAddAltOutlinedIcon fontSize="smaller" />
                    <ColorPopper action="update" listenToColorPopper={listenToColorPopper}/>
                    <ImageOutlinedIcon fontSize="smaller" />
                    <ArchiveOutlinedIcon fontSize="smaller" onClick={isArchive}/>
                    <MoreVertOutlinedIcon fontSize="smaller" />
                </div>
            </div>
        </div>
        )
    }
}

export default TakeNoteThree;
