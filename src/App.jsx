import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";

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

  const eventos = [
    {
    capa: 'http://...',
    tag: temas[0],
    data: new Date(),
    titulo: 'Mulheres no fron',
    descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
  }
]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="imagem logo" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]}/>
          </section>
        );
      })}
    </main>
  );
}

export default App;
