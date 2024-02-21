import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../navBar/NavBar"
import { CP } from "../paginas2/CP"
import { NO } from "../paginas2/NO"
import { Comprar } from "../paginas2/Comprar"
import { MiViaje } from "../paginas2/MIViaje"

export const Router2 =() => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="cp" element={<CP/>} />
      <Route path="no" element={<NO/>}/>
      <Route path="viaje" element={<MiViaje/>} />
      <Route path="destino/:nombre" element={<Comprar/>} />

      <Route path="/*" element={<Navigate to ='cp'/>} />
    </Routes>
    
    
    </>
  )
}