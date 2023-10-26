
'use client'
import Link from "next/link";
import Reto from "./reto";
import { useContext } from "react";
import { UseContext } from "@/app/contexts/authContext";



export default function Page() {
  const raiz: any = useContext(UseContext);

  return (
    <>
      <Reto />
      <div>¡Bienvenido a mi productos!</div>
      {raiz.authState ? <h1>datos true 1</h1> : <h1>datos false 2</h1>}
      <Link href="/">volver</Link>
    </>
  );
}
