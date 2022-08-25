import React from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import './TakeNoteOne.css'



function TakeNoteOne(props) {
    return (
        <div onClick={() => props.listenToTakeNoteOne()}>
            <main className="takeNoteOne">
                <input type="text" placeholder="Take a note..." />
                <div className="imgtno">
                    <CheckBoxOutlinedIcon fontSize="medium" />
                    <BrushOutlinedIcon fontSize="medium" />
                    <ImageOutlinedIcon fontSize="medium" />
                </div>
            </main>
        </div>
    )
}

export default TakeNoteOne;