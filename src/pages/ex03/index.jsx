import './index.scss'

import {useState} from 'react';

function Exercicio3(){

    const [pq, setPq] = useState(0);
    const [md, setMd] = useState(0);
    const [gr, setGr] = useState(0);
    const [resultado, setResultado] = useState(0);

    function quantidades(){

        let p = pq * 13.50

        let m = md * 15.00

        let g = gr * 17.50

        let r = p + m + g

        setResultado(Number(r))

        return setResultado

    }

    return(

        <div className='pagina-ex03'>

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

                <div className='titulo-ex03'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 03 - Valor total por quantidade</h2>

                </div>

                <br />
                <hr width="94%" color='#37FFF3'/>

                <div className='bloco' width="94px">

                    <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>

                </div>

                <div className='card'>

                    <div className='qtds'>

                        <div className='tt'>
                            <h3>Quantidade pequeno</h3>

                            <input type="text" value={pq} onChange={e => setPq(e.target.value)}/>

                        </div>

                        <div className='tt'>
                            <h3>Quantidade médio</h3>

                            <input type="text" value={md} onChange={e => setMd(e.target.value)}/>

                        </div>

                        <div className='tt'>
                            <h3>Quantidade grande</h3>

                            <input type="text" value={gr} onChange={e => setGr(e.target.value)}/>

                        </div>

                    </div>

                    <button onClick={quantidades}>Executar</button>

                </div>

                <h4>Resultado: O total é R${resultado.toFixed(2)}</h4>

            </main>



        </div>

    )

}

export default Exercicio3