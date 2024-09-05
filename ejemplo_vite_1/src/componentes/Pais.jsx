export default function Pais({ pais }) {
  return (
    <>
      <tr key={pais.dominio}>
        <td>{pais.id}</td>
        <td>{pais.dominio}</td>
        {(pais.nombre=="Peru")?(
            <td>ande</td>): 
        
        <td>{pais.nombre}</td>
    }
       
      </tr>
    </>
  );
}
