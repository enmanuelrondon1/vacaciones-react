import data from "./data"
import { Destino } from "../paginas2/Destino"


export const CrearListado =({zona}) => {
  const listado = data.filter(destino => destino.zona === zona)

  return (
    <>
    <section className="lista">
    {
      listado.map(dato => 
        (<Destino key={dato.nombre} {...dato}/>)
        )
    }
    </section>
    </>
  )
}


