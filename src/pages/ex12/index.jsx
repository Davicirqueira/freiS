import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components/Cabecalho'

function Exercicio12(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexo, setSexo] = useState('');
    const [maisVelhaNome, setMaisVelhaNome] = useState('');
    const [maisVelhaIdade, setMaisVelhaIdade] = useState(0);
    const [mulherJovemNome, setMulherJovemNome] = useState('');
    const [mulherJovemIdade, setMulherJovemIdade] = useState(Infinity);
    const [soma, setSoma] = useState(0);
    const [homemMais30, setHomemMais30] = useState(0);
    const [mulheresMenos18, setMulheresMenos18] = useState(0);
    const [mediaIdade, setMediaIdade] = useState(0)
    const [total, setTotal] = useState(0);

    function Identificacao() {
        let c = 1

        while (c == 1) {
            let nomes = nome
            let idades = idade
            let sexos = sexo
        
            if (idades > maisVelhaIdade) {
                setMaisVelhaNome(nomes)
                setMaisVelhaIdade(idades)
        
            }
            if (sexos ==='F' && idades < mulherJovemIdade) {
                setMulherJovemNome(nomes)
                setMulherJovemIdade(idades)
            }

            setSoma(soma += idades)
        
            if (sexos === 'M' && idades > 30) {
                setHomemMais30(homemMais30++)
            }
            if (sexos === 'F' && idades < 18) {
                setMulheresMenos18(mulheresMenos18++)
            }

            setTotal(total++)
            
        }
        
        setMediaIdade(soma/total)

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
                            <input type="radio" name='g' checked={sexo} onChange={e => setSexo(e.target.checked)} /> Masculino
                        </div>
                         
                        <div>
                            <input type="radio" name='g' checked={sexo} onChange={e => setSexo(e.target.checked)} /> Feminino
                        </div>

                    </div>

                    <button onClick={Identificacao}>Executar</button>

                </div>

                <div className='w'>

                    <h4>Pessoa mais velha: {maisVelhaNome}</h4>
                    <h4>Mulher mais jovem: {mulherJovemNome} </h4>
                    <h4>Média de idade: {mediaIdade} </h4>
                    <h4>Homens com mais de 30: {homemMais30} </h4>
                    <h4>Mulheres com menos de 18: {mulheresMenos18} </h4>

                </div>

            </main>

        </div>

    )

}

export default Exercicio12