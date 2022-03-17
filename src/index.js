import ReactDOM from "react-dom"
import Kalkulator from "./Kalkulator"

import './style.css'

function App() {
  return (
    <>
      <h1>Test CI/CD</h1>
      <Kalkulator/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))