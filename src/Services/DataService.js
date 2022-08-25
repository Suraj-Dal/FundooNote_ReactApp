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