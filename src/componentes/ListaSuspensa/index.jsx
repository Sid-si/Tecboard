import "./temas.estilos.css";
export function ListaSuspensa({itens, ...rest}) {
  return (
 <select {...rest} className="lista-suspensa" defaultValue=""> {/* Valor padrao vazio, o rest vai espalhar as demais propiedades */}
  <option value="" disabled>  {/* Opcao padrao desabilitada */}
    Selecione uma opcao </option>
    {itens.map(function (item){ 
      return (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option> 
      )
    })}
    
 </select>
  )
}