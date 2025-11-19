import "./formulario-de-evento.estilos.css";
import { Botao } from "../BotaoCriarEvento";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Prencha para criar um evento</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="data-evento">Qual o nome do evento</Label>
          <CampoDeEntrada
            id="nome"
            type="text"
            name="nome"
            placeholder="summer dev hits"
          ></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="data-evento">Data do evento</Label>
          <CampoDeEntrada
            id="data-evento"
            type="date"
            name="data-evento"
          ></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema-evento">
            Tema do evento
            </Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao> Criar evento </Botao>
      </div>
    </form>
  );
}
