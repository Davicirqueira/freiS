import './index.scss'

function Card({cor_card, titulo, subtitulo}) {

    return (

        <div className='card'>

        <img className='retangulo' src={cor_card} alt=""/>
      
            <h3 >{titulo}</h3>

            <p>{subtitulo}</p>

        </div>

    )

}