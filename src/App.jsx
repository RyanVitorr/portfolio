
import { Principal } from './componentesStyle/Principal.style.jsx';





function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Principal>
        <div>
          <p>Holá,</p>
          
          <h1>Me chamo Ryan, Sou um desenvolvedor Front-end.</h1>
          
          <p>Seja bem vindo(a) ao meu portfólio.</p>          
        </div>
      </Principal>
    </Wrapper>
  )
};

export default App
