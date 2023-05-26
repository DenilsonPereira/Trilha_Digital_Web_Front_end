import MeuComponente from './components/MeuComponente.jsx'
function App() {

  return (
    <div>
      <h1>Olá mundo, React!</h1>
      <MeuComponente/>
      <MeuBotao conteudo = 'me clique' />
      <MeuBotao conteudo = 'depois aqui' />
      <MeuBotao conteudo = 'e por fim aqui' />
    </div>
  )
}
function MeuBotao(props) {

  return (
    <button>{props}</button>
  )
}

export default App