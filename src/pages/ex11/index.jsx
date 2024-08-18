import './index.scss'

import { useState } from 'react'

function Exercicio11(){

    const [numero, setNumero] = useState(0);
    const [resultados, setResultados] = useState([]);

    function tabuada(){

        let tb = []

        for(let i = 0; i <= 10; i++){

            let result = numero * i

            tb[i] = `${numero} x ${i} = ${result}`   

        }

        setResultados(tb)

    }

    return(

        <div className='pagina-ex11'>

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

                <div className='titulo-ex11'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 11 - Tabuada</h2>

                </div>

                <br />
                <hr width="94%" color='#00000'/>

                <div className='bloco' width="94px">

                    <p>Implemente um programa em Javascript que escreva no terminal a tabuada de um número informado pelo ususário. A mensagem deve estar no formato: "A x B = X".</p>

                </div>

                <div className='card'>

                    <h3>Tabuada do:</h3>

                    <input placeholder='0' value={numero} onChange={e => setNumero(e.target.value)}/>

                    <button onClick={tabuada}>Executar</button>

                </div>

                <h4>{resultados.map(r => <h3> {r} </h3>)}</h4>

            </main>

            <section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error nesciunt doloribus quisquam sint dolore aliquam deleniti dignissimos repellendus. Quo laudantium at illo repudiandae nam eligendi reprehenderit incidunt vitae tempore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat sunt aliquam totam tenetur quos ea expedita cumque impedit. Sed consequuntur minima cupiditate impedit veritatis quae autem expedita? Mollitia, rem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit, culpa fugiat aperiam voluptate quod ad aliquam quidem, exercitationem in animi omnis soluta. Laboriosam placeat sunt quis. Deleniti, fuga alias!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, autem enim? Dolorem sed nisi id! Adipisci voluptas, unde accusamus officia ipsa sunt placeat doloremque perspiciatis cum facere! Reprehenderit, dolorum hic?  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti animi itaque beatae ad autem libero quasi, necessitatibus quidem exercitationem unde eos esse saepe explicabo cupiditate mollitia ab est amet!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae hic possimus recusandae, in itaque natus. Eum eveniet nobis vel repudiandae aut corrupti, nam consequatur aliquid veniam optio maxime quibusdam!
            </section>

        </div>

    )

}

export default Exercicio11

