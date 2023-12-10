"use client";
import { UseContext } from "@/app/contexts/authContext";
import { redirect, useRouter } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import perfilApp from "./hooks/perfil-App";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {
    setAuthState,
    testState,
    perfilAuth,
    setPerfilAuth,
    userAuth,
    setUserAuth,
  }: any = useContext(UseContext);

  const { authGetSessionDelete } = perfilApp();

  // const setLogAuth = raiz.setAuthState

  const router = useRouter();

  // console.log('login estado perfil', perfilAuth);

  useLayoutEffect(() => {
    if (!perfilAuth) {
      redirect("/");
    }

    // console.log('dentro del perfil', userAuth);
  }, [perfilAuth]);

  if (!perfilAuth) {
    return null;
  }

  const handleLogout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setAuthState(false);
    setPerfilAuth(false);

    const getSessionAuth = sessionStorage.getItem("session");
    await authGetSessionDelete(getSessionAuth);

    localStorage.removeItem("token");
    sessionStorage.removeItem("session");
    setUserAuth({});
    router.push("/");
  };
  return (
    <>
      {children}
      <br />

      <br />
      <h2>{testState}</h2>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
