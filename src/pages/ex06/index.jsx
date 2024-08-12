import './index.scss'

import { useState } from 'react'

function Exercicio6(){

    return(

        <div className='pagina-ex06'>

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

            <div className='titulo-ex05'>

                <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                <h2>Exercício 05 - Médias escolares</h2>

            </div>

            <br />
            <hr width="94%" color='#0D33B3'/>

            <div className='bloco' width="94px">

                <p>Implementar um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média miníma para passar é 6.</p>

            </div>

            <div className='card'>

                <div className='qtds'>

                    <div className='tt'>
                        <h3>1° Nota</h3>

                        <input type="text" value={nota1} onChange={e => setNota1(e.target.value)}/>

                    </div>

                    <div className='tt'>
                        <h3>2° Nota</h3>

                        <input type="text" value={nota2} onChange={e => setNota2(e.target.value)}/>

                    </div>

                    <div className='tt'>
                        <h3>3° Nota</h3>

                        <input type="text" value={nota3} onChange={e => setNota3(e.target.value)}/>

                    </div>

                </div>

                <button onClick={media}>Executar</button>
                <button onClick={situacao}>Situação</button>

            </div>

            <h4>A sua média do aluno é {med.toFixed(1)}</h4>
            <h4>O aluno passou? {sit}</h4>

            </main>
        </div>

    )

}

export default Exercicio6