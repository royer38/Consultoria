import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes/AppRoutes"
import Header from "./Components/Header"
import ScrollToHash from "./Helpers/ScrollToHash"

function App() {

  return (
    <BrowserRouter future={{v7_startTransition: true}}>
      <ScrollToHash/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
