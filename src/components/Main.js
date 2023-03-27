import { NavLink } from "react-router-dom";
function Main() {
    return (
        <div className="flex">
        <div className=" flex main_elem navbar-dark bg-dark ">
            <div className="note">
                <NavLink className="nav-link link-bottom" to="/create">Create Note </NavLink>
            </div>
            <div className="note">
                <NavLink className="nav-link  " to="/note">Note </NavLink>
            </div>
            
            </div>
               <div className="text-1">
                    <p><b>LiteNote</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
                После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
                <p>Как сделать заметку? </p>
                <div>
                    <ul>
                        <li>Пройдите по ссылке</li>
                        <li>Вставьте текст и нажмите Create</li>
                        <li>Отправьте сгенерированный адрес другу!</li>
                    </ul>
                </div>
                    <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
                </div>
            </div>
    );
}

export default Main;