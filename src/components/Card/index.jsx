import './index.scss'

//Passar um props para cada item do card.
export default function Card({cor, titulo, subtitulo}) {

    return (

        <div className='comp-card'>

            <div className='cores' style={{backgroundColor: cor}}></div>

            <h3>{titulo}</h3>

            <p>{subtitulo}</p>

        </div>

    )

}