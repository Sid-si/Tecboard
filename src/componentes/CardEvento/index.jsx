import './card.estilos.css';

export function CardEvento({ evento }) {
    return (
        <div className='divEvento'>
            <img src={evento.capa} alt={evento.titulo}/>
            <div className="corpoEvento">
                <p className='tag'>{evento.tag.nome}</p>
                <p className='data'>{evento.data.toLocaleDateString('pt-br')}</p>
                <h4 className='titulo'>{evento.titulo}</h4>
                <p className='descricao'>{evento.descricao}</p>
            </div>    
        </div>
    )
}