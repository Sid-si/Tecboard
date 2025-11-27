import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { useState } from "react";

function App() {
  const temas = [
    {
      nome: "front-end",
      id: 1,
    },
    {
      nome: "back-end",
      id: 2,
    },
    {
      nome: "deveops",
      id: 3,
    },
    {
      nome: "inteligencia artificial",
      id: 4,
    },
    {
      nome: "datascience",
      id: 5,
    },
    {
      nome: "cloud",
      id: 6,
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tag: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ]); // estado para armazenar os eventos criados

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]); // atualiza o estado adicionando o novo evento ao array de eventos
  }


  return (
    <main>
      <header>
        <img src="/logo.png" alt="imagem logo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      {temas.map(function (tema) {
        if (!eventos.some(function (evento){
          return evento.tag.nome === tema.nome;
        }))
        return null;
        // para cada tema no array de temas, vamos retornar uma seção
        return (
          <section className="conteiner" key={tema.id}>
            <section key={tema.id}>
              <Tema tema={tema} />
              <section className="eventos">
                {eventos.filter(function (evento) {
                  return evento.tag.nome === tema.nome; // filtra os eventos que pertencem ao tema atual
                  
                })
                .map(function (evento, index) {
                  //index é a posiçao do elemento no array que é indice dele na lista "posição"

                  return <CardEvento evento={evento} key={index} />; // precisamos retornar o evento "return"
                })}
              </section>
            </section>
          </section>
        );
      })}
    </main>
  );
}

export default App;
