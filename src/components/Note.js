// http://localhost:3000/note/01oml96ux6g5tri80zav7xw6
// note позволяет принять расшифровать показать сообщение, проанализировать есть ли такое сообщение  
// когда юзер вводит этот адрес, реакт направляет на компонент note, в котором нужн послать запрос на сервер, получить ответ, после отрисовать страницу

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import env from '../env.json';
import { NavLink } from "react-router-dom";



function Note() {
    let { noteURL } = useParams()// noteURL попадет прилетевшая чатсь 01oml96ux6g5tri80zav7xw6
    const [noteText, setNoteText] = useState('');    
    const [lineClass, setLineClass] = useState('hide');    
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');

                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                }
                )
        }
        else {
                setLineClass('hide');
                setFormClass('');
                setErrorClass('hide');

        }
    }, []);
    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
         if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function searchNote(event) {
        window.location.href = env.url;
    }
    
    return (
        <div className="bg-dark flex">
            <div className={lineClass}>
                <h4 className="h4 btn">Note: {noteURL} </h4>
                <div className="nav-link center">{noteText} <br /> <div className="center_2" >После показа, заметка будет удалена. Скопируйте заметку!</div>  </div>
                <div> <button className="bg-light btn" onClick={searchNote}>Смотреть еще один Note</button></div>
                
            </div>
            <div className={errorClass}>
                <p className="btn ">404 - Произошла ошибка. Note не найден!</p>
            <div>
                <NavLink className="nav-link link-bottom center" to="/create">Create Note </NavLink>
            </div>
                
                
            </div>
            <div className="form-floating">
                <div className={formClass}>
                    <form className="row g-3" action="" onSubmit={getNote}>
                    <label htmlFor="floatingTextarea2" >Введите hash заметки</label>
                    <input type="text" name="url" id="url" className="form-control" />
                    <button type="submit" className="btn btn primary btn-light ">Search Note</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Note;