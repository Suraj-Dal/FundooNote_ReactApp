import React, { useState } from "react";
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
import ColorPopper from "../ColorPopper/ColorPopper";
import { setNotes } from "../../Services/DataService";

function TakeNoteTwo() {
    const [noteObj, setNoteObj] = useState({Title:"", Description:"", Color:"", Archive:"", Pin:""})
    const takeName = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Title: event.target.value }));
    };

    const takeDescription = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Description: event.target.value }));
    };

    const takeArchive = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Archive: true }));
    };

    const takePin = (event) => {
        setNoteObj((prevState) => ({ ...prevState, Pin: true }));
    };

    const listenToColorPopper = (color) => {
        setNoteObj((prevState) => ({ ...prevState, Color: color }));
    }

    const onClose = async () => {
        let response = await setNotes(noteObj)
        console.log(response)
    }

    return (
        <div className="takenotetwo" style={{backgroundColor: noteObj.Color}}>
            <div className="titletnt">
                <input type="text" placeholder="Title" onChange={takeName} style={{backgroundColor: noteObj.Color}}/>
                <div className="pin"><PushPinOutlinedIcon fontSize="medium" onClick={takePin}/></div>
            </div>
            <input type="text" placeholder="Take a note..." onChange={takeDescription} style={{backgroundColor: noteObj.Color}}/>
            <div className="icontnt">
                <div className="icontntimg">
                    <AddAlertOutlinedIcon fontSize="smaller" />
                    <PersonAddAltOutlinedIcon fontSize="smaller" />
                    <ColorPopper action="create" listenToColorPopper={listenToColorPopper}/>
                    <ImageOutlinedIcon fontSize="smaller" />
                    <ArchiveOutlinedIcon fontSize="smaller" onClick={takeArchive}/>
                    <MoreVertOutlinedIcon fontSize="smaller" />
                    <UndoOutlinedIcon fontSize="smaller" />
                    <RedoOutlinedIcon fontSize="smaller" />
                </div>
                <div className="close" onClick={onClose}>Close</div>
            </div>
        </div>
    )
}

export default TakeNoteTwo;