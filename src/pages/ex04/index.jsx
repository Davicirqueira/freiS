import './index.scss'

import { useState } from 'react'

function Exercicio4(){

    const [nome, setNome] = useState('');
    const [paginas, setPaginas] = useState(0);
    const [segundosPg, setSegundosPg] = useState(0);
    const [resultado, setResultado] = useState(0);

    function horasLivro(){

        let t = segundosPg * 60

        let h = (paginas * t) / 3600

        let time = h / 60

        setResultado(time)

        return setResultado

    }

    return(

        <div className='pagina-ex04'>

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

                <div className='titulo-ex04'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 04 - Tempo de leitura</h2>

                </div>

                <br />
                <hr width="94%" color='#a20202'/>

                <div className='bloco' width="94px">

                    <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>

                </div>

                <div className='card'>

                    <div className='qtds'>

                        <div className='tt'>
                            <h3>Nome do livro</h3>

                            <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)}/>

                        </div>

                        <div className='tt'>
                            <h3>Total de páginas</h3>

                            <input type="text" value={paginas} onChange={e => setPaginas(e.target.value)}/>

                        </div>

                        <div className='tt'>
                            <h3>Tempo em segundos</h3>

                            <input type="text" value={segundosPg} onChange={e => setSegundosPg(e.target.value)}/>

                        </div>

                    </div>

                    <button onClick={horasLivro}>Executar</button>

                </div>

                <h4>Você lerá {nome} em {resultado.toFixed(2)} horas</h4>

        </main>

                <section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat est ab iste sint excepturi, quis fuga, quos laboriosam in alias quod, at similique possimus ea nisi omnis soluta laborum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, eius at provident doloremque pariatur adipisci iste nemo culpa rem, explicabo aliquid possimus atque cum saepe! Neque beatae dolorem inventore mollitia.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam, amet explicabo ratione aut, rerum consequatur ipsum natus aliquid tempora soluta. Aliquam voluptas doloremque, quidem praesentium delectus reiciendis tempore atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sed aspernatur iste odio sunt deleniti sequi, quos inventore molestiae porro mollitia doloribus veritatis explicabo deserunt nesciunt doloremque magnam. Consequatur, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis repellendus est quam accusamus placeat consequuntur modi, dolorum doloribus cum id saepe illum excepturi perspiciatis omnis aspernatur ullam exercitationem rem.
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

export default Exercicio4

