import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Signin from '../Sigin'
import Notfound from '../Notfound/notfound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signin', element: <Signin /> },
    { path: '*', element: <Notfound /> },
  ])

  return routes

}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  )
}


export default App
