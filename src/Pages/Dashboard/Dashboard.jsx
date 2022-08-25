import { margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import HeaderComp from "../../Components/Header/Header";
import TakeNoteOne from "../../Components/TakeNoteOne/TakeNoteOne";
import TakeNoteThree from "../../Components/TakeNoteThree/TakeNoteThree";
import TakeNoteTwo from "../../Components/TakeNoteTwo/TakeNoteTwo";
import {getNotes} from "../../Services/DataService"

function Dashboard()
{
    const [view, setView] = useState(true)
    const [notes, setNotes] = useState([])
    useEffect( () => {
        getNotes().then( (response) => setNotes(response.data.data) + console.log(response.data.data))
    }, [])
    function listenToTakeNoteOne()
    {
        setView(false)
    }

    return (
        <div>
            <HeaderComp />
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