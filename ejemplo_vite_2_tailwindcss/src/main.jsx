import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Frontend from './componentes/Frontend.jsx'
import Index from './paginas/index.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Frontend/>,
      children:
      [
        {
          index:true,
          element:<Index/>
        }
      ]
    }

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
