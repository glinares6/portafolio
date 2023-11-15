
'use client'
import Link from "next/link";
import Reto from "./reto";
import { useContext } from "react";
import { UseContext } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";



export default function Page() {
  const { authState }: any = useContext(UseContext);

  const route = useRouter()
  return (
    <>
      <Reto />
      <div>¡Bienvenido a mi productos!</div>
      {authState ? <h1>datos true 1</h1> : <h1>datos false 2</h1>}
      {/* <Link rel="preload" href="/">volver</Link> */}
      <button onClick={() => route.back()}>volver</button>
    </>
  );
}
