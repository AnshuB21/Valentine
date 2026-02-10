import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Yes from './pages/Yes.tsx'
import FirstNo from './pages/FirstNo.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Yes" element={<Yes />} />
      <Route path="/FirstNo" element={<FirstNo />} />
    </Routes>
  )
}

export default App
