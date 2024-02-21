import { useContext } from "react"
import { Context } from "../contexto/Context"
import { Router2 } from "./Router2"


export const RutasPublicas =({children}) => {

  const {logeado} = useContext(Context)
  
  return (logeado  )
  ? <Router2/>
  : children
}
