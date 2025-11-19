import './tema.estilos.css';
export function Tema({ tema }) {
    return (
      <div>
        <h3 className='titulo-tema'>{tema.nome}</h3>
        
      </div>
    );
  }