import { configureStore } from "@reduxjs/toolkit";
import procedenciaReducer from './../features/procedenciaSlice';
import calculadoraReducer from './../features/CalculadoraSlice';
import parametrosReducer from './../features/parametrosSlice';

export const store = configureStore({
    reducer:{
        procedencia: procedenciaReducer,
        calculadora: calculadoraReducer,
        parametros: parametrosReducer,
    }
})