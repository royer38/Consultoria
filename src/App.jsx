import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes/AppRoutes"
import Header from "./Components/Header"

function App() {

  return (
    <BrowserRouter future={{v7_startTransition: true}}>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
