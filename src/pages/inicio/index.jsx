import './index.scss';

import Card from '../../components/Card';

function Inicio() {


  return (

    <div className="pagina-inicio">
      
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

          <h1>Escolha um treino...</h1>

          <div className='bloquinhos'>

              <a className='exs' href="/ex01">
              
                <Card cor={'#ebb268'} titulo={'Cupom de desconto'} subtitulo={'Exercício 01'}/>

              </a>
            
              <a className='exs' href="/ex02">

                <Card cor={'#04F404'} titulo={'Converter Kg/gramas'} subtitulo={'Exercício 02'}/>

              </a>

              <a className='exs' href="/ex03">

                <Card cor={'#0e1e41'} titulo={'Valor total por quantidade'} subtitulo={'Exercício 03'}/>
              
              </a>

              <a className='exs' href="/ex04">

                <Card cor={'#a20202'} titulo={'Tempo de leitura'} subtitulo={'Exercício 04'}/>
            
              </a>

          </div>


          <div className='bloquinhos'>

              <a className='exs' href="/ex05">

                <Card cor={'#0D33B3'} titulo={'Médias escolares'} subtitulo={'Exercício 05'}/>

              </a>

              <a className='exs' href="/ex06">

                <Card cor={'yellow'} titulo={'Salário liquído'} subtitulo={'Exercício 06'}/>

              </a>

              <a className='exs' href="/ex07">

                <Card cor={'#4B0081'} titulo={'Cores primárias'} subtitulo={'Exercício 07'}/>

              </a>

              <a className='exs' href="/ex08">

               <Card cor={'#8D4925'} titulo={'Temperatura'} subtitulo={'Exercício 08'}/>

              </a>

          </div>


          <div className='bloquinhos'>

              <a className='exs' href="/ex09">

                <Card cor={'#808080'} titulo={'Sorveteria'} subtitulo={'Exercício 09'}/>

              </a>

              <a className='exs' href="/ex10">

                <Card cor={'#E44F9C'} titulo={'Calcule o IMC'} subtitulo={'Exercício 10'}/>

              </a>

              <a className='exs' href="/ex11">

                <Card cor={'#000'} titulo={'Tabuada'} subtitulo={'Exercício 11'}/>

              </a>

              <a className='exs' href="/ex12">

                <Card cor={'#4ea93b'} titulo={'Comparador de pessoas'} subtitulo={'Exercício 12'}/>

              </a>

          </div>

        </main>



    </div>

  );

}

export default Inicio;
