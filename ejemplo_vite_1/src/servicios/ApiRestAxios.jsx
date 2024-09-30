import axios from "axios";

let cabeceros =
{
    'content-type': 'application/json',
    'Authorization': 'Bearer c2702a28acd7bd267f658fb34ce56975b56035138cce8183bc5b8bc5d562717b'
}

let cabeceros_upload =
{
    'content-type': 'multipart/form-data',
    'Authorization': 'Bearer c2702a28acd7bd267f658fb34ce56975b56035138cce8183bc5b8bc5d562717b'
}

export async function getCategorias(){

    let datos = axios.get(`${import.meta.env.VITE_API_URL}categorias`,{
        headers:cabeceros
    }).then((response)=>{
        if (response.status == 200) {
            return response.data;
        } else {
            console.log("fallo la conexion en el then");
        }
    }

    ).catch((err)=>{
        console.log("fallo la conexion:"+err);
        
    });

    return datos;
}