import './index.scss'

import { useState } from 'react'

function Exercicio6(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desconto, setDesconto] = useState(0)
    const [total, setTotal] = useState(0)

    function salarioLiquido() {
        let sala = (salario * bonus) / 100

        let bonu = sala + salario

        let desc = bonu - desconto

        setTotal(desc)

        return setTotal
    }

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

            <div className='titulo-ex06'>

                <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                <h2>Exercício 06 - Salário Liquído</h2>

            </div>

            <br />
            <hr width="94%" color='#b3a200'/>

            <div className='bloco' width="94px">

                <p>Implementar um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média miníma para passar é 6.</p>

            </div>

            <div className='card'>

                <div className='qtds'>

                    <div className='tt'>
                        <h3>Salário</h3>

                        <input type="text" value={salario} onChange={e => setSalario(e.target.value)}/>

                    </div>

                    <div className='tt'>
                        <h3>Bônus</h3>

                        <input type="text" value={bonus} onChange={e => setBonus(e.target.value)}/>

                    </div>

                    <div className='tt'>
                        <h3>Desconto</h3>

                        <input type="text" value={desconto} onChange={e => setDesconto(e.target.value)}/>

                    </div>

                </div>

                <button onClick={salarioLiquido}>Executar</button>

            </div>

            <h4>O salário liquído é R${total}</h4>

            </main>
        </div>

    )

}

export default Exercicio6