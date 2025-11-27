import "./formulario-de-evento.estilos.css";
import { Botao } from "../BotaoCriarEvento";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoformSubmetido(formData) {

    const evento = {
      capa: formData.get("capa"),
      tag: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("data-evento")),
      titulo: formData.get("nome"),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoformSubmetido}>
      <TituloFormulario>Prencha para criar um evento</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento</Label>
          <CampoDeEntrada
            id="nome"
            type="text"
            name="nome"
            placeholder="summer dev hits"
          ></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da capa</Label>
          <CampoDeEntrada
            id="capa"
            type="text"
            name="capa"
            placeholder="http://..."
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
          <Label htmlFor="tema-evento">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao> Criar evento </Botao>
      </div>
    </form>
  );
}
