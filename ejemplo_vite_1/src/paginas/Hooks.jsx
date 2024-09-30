import { Link } from "react-router-dom"

const Hooks = () => {
  return (
  <>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to="/hooks/evento-click">Evento Click</Link>
        </li>
        <li>
          <Link to="/hooks/usestate">useState</Link>
        </li>
        <li>
          <Link to="/hooks/evento-onchange">Evento onChange</Link>
        </li>
        <li>
          <Link to="/hooks/eventos-varios">Eventos Varios</Link>
        </li>
        <li>
          <Link to="/hooks/useeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/hooks/customhooks">Custom Hook</Link>
        </li>
        <li>
          <Link to="/hooks/useloaderdata">useLoaderData</Link>
        </li>
        <li>
          <Link to="/hooks/usenavigation">useNavigation</Link>
        </li>
        <li>
          <Link to="/hooks/uselocation">useLocation</Link>
        </li>
        <li>
          <Link to="/hooks/useref">useRef</Link>
        </li>
      </ul>
  </>
  )
}

export default Hooks