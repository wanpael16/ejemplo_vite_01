
import styled from '@emotion/styled';

export const Titulo = styled.h1`
  font-size: 40px;
  color:red;
  background:red;
`
export const Circulo = styled.div`
  background-color:red;
  color:#fff;
  text-align:center;
  width : 100px;
  height: 100px;
  border: 5px solid red;
  border-radius: 50%;
  justify:center
`
export const Caja =styled.input`
padding : 0.5em;
margin: 0.5em;
background: papayawhip;
border: none;
border:radius: 3px;
color:${props => props.color_custom || "green"}
`