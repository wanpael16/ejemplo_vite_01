
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    pais: "Perú",
    ciudad: "Piura"
}


export const procedenciaSlice = createSlice({
    name: "procendencia",
    initialState,
    reducers:
    {
        cambiarMexico: (state) =>
        {
            state.pais = "Mexico",
            state.ciudad = "Ciudad de Mexico"
        },
        cambiarChile: (state) =>
            {
                state.pais = "Chile",
                state.ciudad = "Ciudad de Chile"
            },
            cambiarVenezuela: (state) =>
                {
                    state.pais = "Venezuela",
                    state.ciudad = "Ciudad de Venezuela"
                },
    }
})


export const {cambiarChile,cambiarMexico,cambiarVenezuela} = procedenciaSlice.actions

export default procedenciaSlice.reducer // el reduce lo vamos a usar despues en el store