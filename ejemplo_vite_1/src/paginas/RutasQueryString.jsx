import { useLocation } from "react-router-dom";

const RutasQueryString = () => {

    const search = useLocation().search;
    // console.log(search);
    // {
    //     "pathname": "/rutas/query-string",
    //     "search": "?id=12&slug=lo-que-sea",
    //     "hash": "",
    //     "state": null,
    //     "key": "ebfu0anx"
    // }

    let id = new URLSearchParams(search).get('id');
    let slug = new URLSearchParams(search).get('slug');
  return (
    <>
      <h2>Ejemplo parametros query string</h2>
      <ul>
        <li>ID:{id}</li>
        <li>Slug: {slug}</li>
      </ul>
    </>
  );
};

export default RutasQueryString;
