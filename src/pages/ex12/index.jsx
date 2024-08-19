import './index.scss'

function Exercicio12(){

    return(

        <div className='pagina-ex12'>

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

                <div className='titulo-ex12'>

                    <a href="/"><img className='seta' src="/assets/images/setinha_freiS.png" alt="" /></a>

                    <h2>Exercício 12 - Comparador de pessoas</h2>

                </div>

                <br />
                <hr width="94%" color='#4EA93B'/>

                <div className='bloco' width="94px">

                    <p>Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.</p>

                </div>

                <div className='card'>

                    <h3>Nome</h3>

                    <input placeholder="Nome" />

                    <h3>Idade</h3>

                    <input placeholder="Idade"  />

                    <h3>Sexo</h3>
                    
                    <div className='group'>

                        <div className='r'>
                            <input type="radio" name='g'/> Masculino
                        </div>
                         
                        <div>
                            <input type="radio" name='g'/> Feminino
                        </div>

                    </div>

                    <button >Executar</button>

                </div>

                <div className='w'>

                    <h4>Pessoa mais velha: </h4>
                    <h4>Mulher mais jovem: </h4>
                    <h4>Média de idade: </h4>
                    <h4>Homens com mais de 30: </h4>
                    <h4>Mulheres com menos de 18: </h4>

                </div>

            </main>

        </div>

    )

}

export default Exercicio12