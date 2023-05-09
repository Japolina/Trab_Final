import './style.css'
import BATimg from '../../assets/batman.jpg'
import REimg from '../../assets/resident.jpg'
import REDimg from '../../assets/Red.png'

function Main(){
    return (
        <main className="content">
            <h2 id="inicio">Os Melhores Jogos 2023</h2>
            <input 
            type="text" 
            placeholder="Digite o nome"
            />
            <button 
            type="button"
            >Adicionar</button>
            <section>
            <div>
            <ul className="games-list">
                        <li>
                                <img src={BATimg} alt="Batman"/>
                        </li>

                        <li>
                                <img src={REimg} alt="Resident Evil"/>
                        </li>

                        <li>
                                <img src={REDimg} alt="RED DEAD REDEMPTION"/>
                        </li>

            </ul>
            </div>
         </section>
        </main>
        
    )
}

export default Main