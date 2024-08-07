import './index.scss'

import {useState} from 'react'

function Exercicio2(){

    const [contador, setContador] = useState(0);

    return(

        <div className='pagina-ex02'>

            <header>

                <div className='esq'>

                    <img className='logo' src="/assets/images/logo_freiS.png" alt="" />

                    <h2 className='R'>React FreiS</h2>

                </div>

                <div className='dir'>

                    <a href="/ex01">Inicio</a>

                    <a href="/sobre">Sobre</a>

                </div>

            </header>

            <main>

                <div className='titulo-ex02'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 02 - Converter Kg/gramas</h2>

                </div>

                <br />
                <hr width="94%" color='#B3FF37'/>

                <div className='bloco' width="94px">

                    <p>Implementar um programa em Javascript para converter kilos em gramas.</p>

                </div>

                <div className='card'>

                    <h3>Valor em gramas</h3>

                    <input type="text" placeholder={contador}/>

                    <button>Executar</button>

                </div>

                <h4>Resultado: O total é R${contador.toFixed(2)}</h4>

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

export default Exercicio2