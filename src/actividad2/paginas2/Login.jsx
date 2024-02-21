import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexto/Context";

export const Login = () => {

  const {logearse, setReferencia} = useContext(Context)
  const navegacion = useNavigate();

  const login = () => {
    logearse('enmanuel')
    navegacion("/", { replace: true });
  };
  const registro =(e) => {
    setReferencia(e.target.value)
  }
  return (
    <>
    <h1>Gracias por visitar nuestro pais:</h1>
      <section className="login">
        <label htmlFor="referencia" >Referencia:</label>
        <input id="referencia" onChange={registro} placeholder="referencia de tu viaje" autoFocus autoComplete="off" />
         <button onClick={login}>Login</button>
      </section>
    </>
  );
};
