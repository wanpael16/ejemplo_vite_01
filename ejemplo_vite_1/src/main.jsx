import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import './../public/css/blog.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Frontend from './componentes/Frontend.jsx'
import {Home} from './paginas/Home'
import {SobreNosotros} from './paginas/SobreNosotros'
import {Error404} from './paginas/Error404'
import Rutas from './paginas/Rutas.jsx'
import RutasPath from './paginas/RutasPath.jsx'
import RutasQueryString from './paginas/RutasQueryString.jsx'
import ErrorPersonalizado from './paginas/ErrorPersonalizado.jsx'
import Hooks from './paginas/Hooks.jsx'
import HooksEventoClick from './paginas/HooksEventoClick.jsx'
import HooksUseState from './paginas/HooksUseState.jsx'
import HooksEventoOnchange from './paginas/HooksEventoOnchange.jsx'
import HooksEventosVarios from './paginas/HooksEventosVarios.jsx'
import HooksUseEffect from './paginas/HooksUseEffect.jsx'
import HooksCustom from './paginas/HooksCustom.jsx'
import HooksuseLoaderData, {loader as paisesLoader} from './paginas/HooksuseLoaderData.jsx'
import HooksuseNavigation from './paginas/HooksuseNavigation.jsx'
import HooksuseLocation from './paginas/HooksuseLocation.jsx'
import HooksuseRef from './paginas/HooksuseRef.jsx'
import Formularios from './paginas/Formularios.jsx'
import FormularioSimple from './paginas/FormularioSimple.jsx'
import FormularioUseActionData, {action as procesarFormularioActionDate} from './paginas/FormularioUseActionData.jsx'
import ReduxEjemplo from './paginas/ReduxEjemplo.jsx'
import AxiosComponent from './paginas/AxiosComponent.jsx'
import  {AxiosCategorias, loader as listarCategorias} from './paginas/AxiosCategorias.jsx'


const router = createBrowserRouter
(
  [
    {
      path: '/',
      element: <Frontend/>,
      children:
      [
        {
          index: true,
          element :<Home/>
        },
        {
          path: '/sobre-nosotros',
          element :<SobreNosotros/>
        },
        {
          path: '*',
          element :<Error404/>
        },
        {
          path: '/rutas',
          element :<Rutas/>
        },
        {
          path: '/rutas/path/:id/:slug',
          element :<RutasPath/>
        },
        {
          // los parametros query string no forman para de la url de forma nativa, son parametros adicionales
          path: '/rutas/query-string',
          element :<RutasQueryString/>,
          errorElement: <ErrorPersonalizado/>
        },
        {
          path: '/hooks',
          element :<Hooks/>
        },
        {
          path: '/hooks/evento-click',
          element :<HooksEventoClick/>
        },
        {
          path: '/hooks/usestate',
          element :<HooksUseState/>
        },
        {
          path: '/hooks/evento-onchange',
          element :<HooksEventoOnchange/>
        },
        {
          path: '/hooks/eventos-varios',
          element :<HooksEventosVarios/>
        },
        {
          path: '/hooks/useeffect',
          element :<HooksUseEffect/>
        },
        {
          path: '/hooks/customhooks',
          element :<HooksCustom/>
        },
        {
          path: '/hooks/useloaderdata',
          element :<HooksuseLoaderData/>,
          loader: paisesLoader
        },
        {
          path: '/hooks/usenavigation',
          element :<HooksuseNavigation/>
        },
        {
          path: '/hooks/uselocation',
          element :<HooksuseLocation/>
        },
        {
          path: '/hooks/useref',
          element :<HooksuseRef/>
        },
        {
          path: '/formularios',
          element :<Formularios/>
        },
        {
          path: '/formularios/formulario-simple',
          element :<FormularioSimple/>
        },
        {
          path: '/formularios/formulario-useactiondata',
          element :<FormularioUseActionData/>,
          action:procesarFormularioActionDate
        },

        {
          path: '/redux',
          element :<ReduxEjemplo/>
        },
        {
          path: '/axios',
          element :<AxiosComponent/>
        },
        {
          path: '/axios/categorias',
          element :<AxiosCategorias/>,
          loader: listarCategorias
        },
      ]
    }
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
