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
        <div  className="row g-3">
            <form onSubmit={loadDataFromForm} className={formClass}>
                <label htmlFor="floatingTextarea2"><h3>Введите заметку</h3></label>
                <textarea   className='form-control  form-control-lg' name="note" id="note" defaultValue=""></textarea>
                <button className="btn btn primary mb-3" type='submit'>Create</button>
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div><button onClick={()=>{window.location.reload()}}>Add new Note</button></div>   
            </div>      
        </div>                                           //window.location.reload() - метод перезагружает страницу
    );
}

export default Create;