import './index.scss'

import { useState } from 'react'

function Exercicio8(){
    
    const [temp, setTemp] = useState('')
    const [situ, seSitu] = useState('')

    function calcTemp(){

        let s = ''

        if(temp >= 41){

            s = 'Hipertermia'

        }

        else if(temp >= 39.6 && temp < 41){

            s = 'Febre Alta'

        }

        else if(temp >= 37.6 && temp < 39.6){

            s = 'Febre'

        }

        else if(temp >= 36 && temp < 37.6){

            s = 'Normal'

        }

        else if(temp < 36){

            s = 'Hipotermia'

        }

        seSitu(s)

        return seSitu

    }

    return(

        <div className='pagina-ex08'>

            <header>

                <div className='esq'>

                    <img className='logo' src="/assets/images/logo_freiS.png" alt="" />

                    <h2 className='R'>React FreiS</h2>

                </div>

                <div className='dir'>

                    <a href="/">Inicio</a>

                    <a href="/sobre">Sobre</a>

                </div>

            </header>

            <main>

                <div className='titulo-ex08'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 08 - Temperatura</h2>

                </div>

                <br />
                <hr width="94%" color='#8D4925'/>

                <div className='bloco' width="94px">

                    <p>Implementar um programa em Java que a partir da temperatura, avalie a situação da pessoa conforme a tabela abaixo. Ao final apresente a classificação</p>

                </div>

                <img className='tabelinha' src="assets/images/tabelinha_ex08.png" alt="" />

                <div className='card'>

                    <h3>Temperatura</h3>

                    <input placeholder="0.0" value={temp} onChange={e => setTemp(e.target.value)} />

                    <button onClick={calcTemp}>Executar</button>

                </div>

                <h4>A situação para sua tempratura é {situ}</h4>

            </main>

        </div>

    )

}

export default Exercicio8