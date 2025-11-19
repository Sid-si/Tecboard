import "./temas.estilos.css";
export function ListaSuspensa() {
  return (
 <select className="lista-suspensa" id="lista-suspensa">
  <option value="IA">IA</option>
  <option value="Front-end">Front-end</option>
  <option value="Backend">Backend</option>
  <option value="Deveops">Deveops</option>
  <option value="Data Science">Data Science</option>
  <option value="Clound">Clound</option>
 </select>
  )
}