import './App.css'
import { Contact } from './Page/Contact'
import { Home } from './Page/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from './Page/NotFound'
import { Navigation } from './Components/Navigation'
import { Prortfolio } from './Page/Portfolio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Prortfolio />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
