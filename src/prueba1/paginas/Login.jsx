import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Contexto } from "../context/Contexto"

export const Login =() => {
  const {logearme} = useContext(Contexto)
    const navegacion = useNavigate()
  const login =() => {
    navegacion('/', {replace:true})
    logearme('enmanuel')
  }


  return (
    <div>
      <h1>pantalla de loging</h1>
      <button onClick={login}>Loging</button>

    </div>
  )
}