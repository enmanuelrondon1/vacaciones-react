// import { useContext } from "react"
// import { Contexto } from "../prueba1/context/Contexto"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Contexto } from "../context/Contexto"

export const RutasPublicas =({children}) => {

  const {estado}=useContext(Contexto)

  return (!estado  )
  ?children
  :<Navigate to='/contenido1'/>
}