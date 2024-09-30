import {useState} from 'react'

const useHooksPersonalizado = () => {
    const [verduras, setVenturas] = useState([]);
  return [verduras,setVenturas];
}

export default useHooksPersonalizado