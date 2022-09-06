import { margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import MiniDrawer from "../../Components/Drawer/Drawer";
import HeaderComp from "../../Components/Header/Header";
import TakeNoteOne from "../../Components/TakeNoteOne/TakeNoteOne";
import TakeNoteThree from "../../Components/TakeNoteThree/TakeNoteThree";
import TakeNoteTwo from "../../Components/TakeNoteTwo/TakeNoteTwo";
import {getNotes} from "../../Services/DataService"

function Dashboard()
{
    const [view, setView] = useState(true)
    const [notes, setNotes] = useState([])
    const [drawer, setDrawer] = useState(false)
    const [currentNote, setCurrentNotes] = useState("Notes")
    useEffect( () => {
        getNotes().then( (response) => 
        {
            console.log(response)
         let filterArray = response.data.data.filter((note) => {
            if (currentNote == "Notes")
            {
                if (note.archive == false && note.trash == false)
                {
                    return note
                }
            }
            if (currentNote == "Archive")
            {
                if (note.archive == true && note.trash == false)
                {
                    return note
                }
            }
            if (currentNote == "Trash")
            {
                if (note.archive == false && note.trash == true)
                {
                    return note
                }
            }
         })
         setNotes(filterArray)
        })
    }, [currentNote])
    function listenToTakeNoteOne()
    {
        setView(false)
    }
    const listenToHeader = () => {
        setDrawer(!drawer)
    }

    const listenToDrawer = (data) =>
    {
        setCurrentNotes(data)
    }


    return (
        <div>
            <HeaderComp listenToHeader={listenToHeader}/>
            <MiniDrawer drawer={drawer} listenToDrawer={listenToDrawer}/>
            {
                view ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}/> : <TakeNoteTwo />
            }
            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: "15%"
            }}>
            {
                 notes.map(note => <TakeNoteThree note={note}/>)
            }
            </div>
            
        </div>
    )
}

export default Dashboard;