import "bootstrap/dist/css/bootstrap.css"
import Login from "./Login"
import Dashboard from "./Dashboard"

const code = new URLSearchParams(windows.location.search).get
("code")

function App(){
  return code ? <Dashboard code={code} /> : <Login />
}

export default App


