import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './screens/Body'
import "tailwindcss";
import Feed from './screens/Feed'
import plantStore from './redux/reduxStore'
import NewPlant from './screens/NewPlant'

function App() {
  const [count, setCount] = useState(0)

  return (
<Provider store={plantStore}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Body/>}>
     <Route path='/' element={<Feed/>}></Route>
     <Route path='/newPlant' element={<NewPlant/>}></Route>
    </Route>
  </Routes>

  </BrowserRouter>

</Provider>
  )
}

export default App
