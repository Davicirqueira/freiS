import './index.scss'

import {useState} from 'react'

function Exercicio1(){

    const [valorPedido, setValorPedido] = useState(0);  //variavel de estado.  //onChange=, onClick=, ononMouseMove
    const [valorCupom, setValorCupom] = useState(0)
    const [resultado, setResultado] = useState(0)
 

    function desconto(){

        let e  = 0

        let r = 0

        if(valorCupom == 0){

            e = valorPedido

            r = e

        }

        else{

            r = valorPedido - valorCupom

        }

        setResultado(Number(r))

        return setResultado

    }


    return(

        <div className='pagina-ex01'>

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

                <div className='titulo-ex01'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                   <h2>Exercício 01 - Cupom de desconto</h2>

                </div>

                <br />
                <hr width="94%" color='#FFCE37'/>

                <div className='bloco' width="94px">

                    <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
                
                </div>

                <div className='card'>

                    <h3>Informe o valor do pedido</h3>

                    <input type="text" value={valorPedido} onChange={e => setValorPedido(e.target.value)} />

                    <h3>Informe o valor do cupom</h3>

                    <input type="text"  value={valorCupom} onChange={e => setValorCupom(e.target.value)}/>

                    <button onClick={desconto}>Executar</button>

                </div>

                <h4>Resultado: O total é R${resultado.toFixed(2)}</h4>

            </main>



        </div>

    )

}

export default Exercicio1