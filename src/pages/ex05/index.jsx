import './index.scss'

import { useState } from 'react';

function Exercicio5(){

    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [med, setMed] = useState(0);
    const [sit, setSit] = useState('')


    function media(){

        let media = ( Number(nota1) + Number(nota2) + Number(nota3) ) / 3


        setMed(Number(media))

        return setMed

    }

    function situacao(){

        let a = ''

        let media = ( Number(nota1) + Number(nota2) + Number(nota3) ) / 3

        if(media >= 6){

            a = 'True'

        }

        else{
            a = 'False'
        }

        setSit(a)

        return setSit

    }

    return(

        <div className='pagina-ex05'>

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

export default Exercicio5