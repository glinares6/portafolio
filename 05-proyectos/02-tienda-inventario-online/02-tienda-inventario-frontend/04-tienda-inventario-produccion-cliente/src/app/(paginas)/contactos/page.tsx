"use client";
import MenuCuenta from "@/app/components/menu-cuenta";
import { UseContext } from "@/app/contexts/authContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import paymentApp from "./hooks/payment-App";

export default function Page() {
  const { cuentaState }: any = useContext(UseContext);
  const route = useRouter();

  const [preferentId, setPreferentId] = useState("");
  const [booleanPayment, setBooleanPayment] = useState(false);

  const { server } = paymentApp();

  useEffect(() => {
    (async () => {
      const reqPaymentBackend = await fetch(`${server}/checkout`, {
        method: "POST",
      });

      const resPaymentBackend = await reqPaymentBackend.json();

      console.log("getPaymentBackend -> ", resPaymentBackend);

      setPreferentId(resPaymentBackend.id);

      initMercadoPago(process.env.NEXT_PUBLIC_WALLET || "YOUR_PUBLIC_KEY", {
        locale: "es-PE",
      });

      setBooleanPayment(true);
    })();
  }, []);

  return (
    <>
      <div className={` ${cuentaState && "relative z-10"}`}>
        <MenuCuenta />
        <div>¡Bienvenido a mi contactos!</div>
        {/* <Link rel="preload" href="/">volver</Link> */}
        <button onClick={() => route.back()}>volver</button>
        <hr />
        <div>
          <Link rel="preload" href="/contactos/genero">
            nesting genero
          </Link>
        </div>
        <div>
          <Link rel="preload" href="/contactos/signo">
            nesting signo
          </Link>
        </div>

        {booleanPayment && (
          <div id="wallet_container">
            


            <Wallet initialization={{ preferenceId: `${preferentId}` }} customization={{ texts:{ valueProp: 'smart_option'}}} />
          </div>
        )}
      </div>
    </>
  );
}
