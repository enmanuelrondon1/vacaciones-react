// import { useContext } from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Contexto } from "../context/Contexto"


export const RutasPrivadas =({children}) => {

  const {estado} = useContext(Contexto)

  return (estado)
  ? children
  : <Navigate to='/login'/>

}

