import Link from "next/link";

export default function Page() {
    return(
        <>
           <div>¡Bienvenido a mi contactos!</div>
           <Link href="/">volver</Link>
           <hr />
           <Link href="/contactos/genero">nesting genero</Link>
           </>
           
       );
  }