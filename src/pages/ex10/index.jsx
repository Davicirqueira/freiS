import './index.scss'

function Exercicio10(){

    return(

        <div className='pagina-ex10'>

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

                <div className='titulo-ex10'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                <h2>Exercício 10 - Calcule o IMC</h2>

                </div>

                <br />
                <hr width="94%" color='#E44F9C'/>

                <div className='bloco' width="94px">

                    <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>

                </div>

                <div className='card'>

                    <h3>Altura</h3>

                    <input type="text"/>

                    <h3>Peso</h3>

                    <input type="text" />

                    <button>Executar</button>

                </div>

                <h4>O seu IMC é: </h4>
                <h4>Sua classificação é</h4>


            </main>

        </div>

    )

}

export default Exercicio10