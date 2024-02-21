import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../paginas2/Login";
import { Router2 } from "./Router2";
import { RutasPrivadas } from "./RutasPrivadas";
import { RutasPublicas } from "./RutasPublicas";

export const Router1 = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        />
        <Route
          path="/*"
          element={
            <RutasPrivadas>
              <Router2 />
            </RutasPrivadas>
          }
        />
      </Routes>
    </>
  );
};
