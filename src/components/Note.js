// http://localhost:3000/note/01oml96ux6g5tri80zav7xw6
// note позволяет принять расшифровать показать сообщение, проанализировать есть ли такое сообщение  
// когда юзер вводит этот адрес, реакт направляет на компонент note, в котором нужн послать запрос на сервер, получить ответ, после отрисовать страницу

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import env from '../env.json';



function Note() {
    let { noteURL } = useParams()// notUrl попадет прилетевшая чатсь 01oml96ux6g5tri80zav7xw6
    const [noteText, setNoteText] = useState('');    
    useEffect(() => {
        if (noteURL !== undefined) {
              fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({"url": noteURL })
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {   
                    setNoteText(response.note);
                }
        })
        }
}, [])
    return (
        <div>
            <div>
                <h4>Note: </h4>
                <div>{noteText} </div>
            </div>
        </div>
    );
}

export default Note;