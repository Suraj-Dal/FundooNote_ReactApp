import { convertLength } from "@mui/material/styles/cssUtils";
import { color } from "@mui/system";
import axios from "axios";

let header = {
    headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const getNotes = () => {
    let response = axios.get("https://localhost:44347/api/Notes/Get", header)
    return response
} 

export const setNotes = async (noteObj) => {
    let response = await axios.post("https://localhost:44347/api/Notes/Create", noteObj, header)
    return response
}

export const setColor = async (color, id) => {
    let response = await axios.put(`https://localhost:44347/api/Notes/Color?NoteID=${id}&color=${color}`, null, header)
    console.log(response)
    return response
}