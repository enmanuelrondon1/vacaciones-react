import { Router1 } from "./routers2/Router1";
import "./estilos.css";
import { Provider } from "./contexto/Provider";

export const Home = () => {
  return (
    <>
      <Provider>
        <Router1 />
      </Provider>
    </>
  );
};
