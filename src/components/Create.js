import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    let sendData = (obj) => {
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
                if (response.result) {
                    setUrl(env.url+ '/' + response.url)        
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
            <form onSubmit={loadDataFromForm}>
                <label htmlFor="">Введите заметку</label>
                <textarea name="note" id="note" defaultValue="text me"></textarea>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default Create;