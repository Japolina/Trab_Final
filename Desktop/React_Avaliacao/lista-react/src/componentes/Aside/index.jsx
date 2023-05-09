import './style.css'
import Logo from '../../assets/logo.png'

function Aside() {
    return (
        <aside className="left">

            <img src={Logo} width="160px" alt="Logo Gamer"/>
            <ul>
                <li>
                    <a href="#inicio" className="active">Inicio</a>
                </li>
                <li>
                    <a href="#terror">Terror</a>
                </li>
                <li>
                    <a href="#historia">Historia</a>
                </li>
                <li>
                    <a href="#fps">FPS</a>
                </li>
            </ul>
        </aside>
    )
}

export default Aside