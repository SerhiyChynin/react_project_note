import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); //скрываем
    const [formClass, setFormClass] = useState(''); 
    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {                      // .result - проверяет либо true либо false. Создалась заметка или нет
                    setUrl(env.url+ '/' + response.url)        //response.url - backend ответ сервера, хеш в поле url
                    console.log(url);
                }
        })
    }

    function loadDataFromForm(event) {
        event.preventDefault();
        console.log('Hello World!')
        let note = event.target.elements.note.value;
        note = note.trim()
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({'note': note})
    }
    return (
        <div>
            <form onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="">Введите заметку</label>
                <textarea name="note" id="note" defaultValue="Test"></textarea>
                <button type='submit'>Create</button>
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div><button onClick={()=>{window.location.reload()}}>Add new Note</button></div>   
            </div>      
        </div>                                           //window.location.reload() - метод перезагружает страницу
    );
}

export default Create;