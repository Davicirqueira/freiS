import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/Cabecalho'

function Exercicio12(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexoM, setSexoM] = useState(false);
    const [sexoF, setSexoF] = useState(false);
    const [maisVelhaNome, setMaisVelhaNome] = useState('');
    const [maisVelhaIdade, setMaisVelhaIdade] = useState(0);
    const [mulherJovemNome, setMulherJovemNome] = useState('');
    const [mulherJovemIdade, setMulherJovemIdade] = useState();
    const [soma, setSoma] = useState(0);
    const [homems30, setHomem30] = useState(0);
    const [mediaIdade, setMediaIdade] = useState(0)
    const [mulherMenos, setMulherMenos] = useState('')

    function Identificacao() {
        let total = 0
        let c = 1
        let t = 0
        let homemMais30 = 0
        let maisVelha = maisVelhaIdade
        let mulheresMenos18 = ''


        while (c === 1) {
            let nomes = nome
            let idades = idade
            let sexoMasc = sexoM
            let sexoFemi = sexoF
            let s = 0
        
            if (idades > maisVelha) {
                setMaisVelhaNome(nomes)
                setMaisVelhaIdade(idades)
        
            }
            if (sexoFemi === true && idades < mulherJovemIdade) {
                setMulherJovemNome(nomes)
                setMulherJovemIdade(idades)

            }

            s = Number(soma) + Number(idades)

            setSoma(s)
        
            if (sexoMasc === true && idades > 30) {

                homemMais30++ 
                
            }
            if (sexoFemi === true && idades < 18) {
                mulheresMenos18 = nome
            }

            setHomem30(homemMais30)

            setMulherMenos(mulheresMenos18)

            total++
            
        }
        
        t = soma / total

        setMediaIdade(t)

    }

    return(

        <div className='pagina-ex12'>

            <Cabecalho/>

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

                    <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />

                    <h3>Idade</h3>

                    <input placeholder="Idade" value={idade} onChange={e => setIdade(e.target.value)} />

                    <h3>Sexo</h3>
                    
                    <div className='group'>

                        <div className='r'>
                            <input type="checkbox" checked={sexoM} onChange={e => setSexoM(e.target.checked)} /> Masculino
                        </div>
                         
                        <div>
                            <input type="checkbox" checked={sexoF} onChange={e => setSexoF(e.target.checked)} /> Feminino
                        </div>

                    </div>

                    <button onClick={Identificacao}>Executar</button>

                </div>

                <div className='w'>

                    <h4>Pessoa mais velha: {maisVelhaNome}</h4>
                    <h4>Mulher mais jovem: {mulherJovemNome} </h4>
                    <h4>Média de idade: {mediaIdade} </h4>
                    <h4>Homens com mais de 30: {homems30} </h4>
                    <h4>Mulheres com menos de 18: {mulherMenos} </h4>

                </div>

            </main>

        </div>

    )

}

export default Exercicio12