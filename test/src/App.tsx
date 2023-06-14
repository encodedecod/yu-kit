import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
