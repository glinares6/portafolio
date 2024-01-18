"use client";
import { createContext, useState } from "react";
import "./globals.css";
// import { Inter } from "next/font/google";

import Link from "next/link";

import { UseContext } from "./contexts/authContext";
import { useRouter } from "next/navigation";

// export const UseContext: any = createContext(null);
const { Provider } = UseContext;

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const urlPrimeraOpcion = "http://localhost:3000";
  // const urlSegundaOpcion = "https://nest-online-build.onrender.com";

  const [authState, setAuthState] = useState(false);
  const [perfilAuth, setPerfilAuth] = useState(false);

  const [cuentaState, setCuentaState] = useState(false);
  const [inicioState, setInicioState] = useState(false);

  const [registroSwitch, setRegistroSwitch] = useState(false);
  const [loginSwitch, setLoginSwitch] = useState(false);
  const [correoSwitch, setCorreoSwitch] = useState(false);

  const [inicioSwitch, setInicioSwitch] = useState(false);

  const [userAuth, setUserAuth] = useState({});

  const [pedidoList, setPedidoList] = useState({});

  const [testState, setTestState] = useState("desde el inicio");

  const route = useRouter();

  return (
    <>
      <Provider
        value={{
          authState,
          setAuthState,
          testState,
          perfilAuth,
          cuentaState,
          setCuentaState,
          inicioState,
          setInicioState,
          setPerfilAuth,
          userAuth,
          setUserAuth,
          pedidoList,
          setPedidoList,
          registroSwitch,
          setRegistroSwitch,
          inicioSwitch,
          setInicioSwitch,
          loginSwitch,
          setLoginSwitch,
          correoSwitch,
          setCorreoSwitch,
        }}
      >
        <html lang="en">
          {/* <body className={inter.className}> */}
          <body>
            <div className={`relative mb-[64px] z-30`}>
              <div className={`w-full fixed top-0 "`}>
                <div className="flex justify-end items-center gap-5 relative bg-blue-800	pr-5 w-full h-16  ">
                  {/* <Link className="text-white font-bold" href="/perfil">
            perfil
          </Link> */}

                  <div
                    className={`flex items-center h-full  text-white font-bold ${
                      inicioState && "pointer-events-none cursor-auto"
                    }`}
                  >
                    {" "}
                    <Link
                      className="flex items-center w-full h-full"
                      onClick={() => {
                        // setInicioState(false);
                        setCuentaState(false);
                      }}
                      rel="preload"
                      href="/contactos"
                      prefetch={false}
                    >
                      contactos
                    </Link>
                  </div>

                  {/* <button className="text-white font-bold" onClick={() => route.push('/contactos')}>contactos</button> */}
                  <div
                    className={`flex items-center h-full   text-white font-bold ${
                      inicioState && "pointer-events-none cursor-auto"
                    }`}
                  >
                    {" "}
                    <Link
                      className="flex items-center w-full h-full"
                      onClick={() => {
                        setCuentaState(false);
                      }}
                      rel="preload"
                      href="/productos"
                      prefetch={false}
                    >
                      productos
                    </Link>
                  </div>

                  {/* <button className="text-white font-bold" onClick={() => route.push('/productos')}>productos</button> */}
                  {/* {!authState && (
                <div className="text-white font-bold">
                  <Link rel="preload" href="/logincliente" prefetch={false}>
                    cuenta
                  </Link>
                </div>
              )} */}
                  {!authState && (
                    <button
                      className={`h-full  text-white font-bold ${
                        inicioState && "pointer-events-none cursor-auto"
                      }`}
                      onClick={() => {
                        if (cuentaState) {
                          setCuentaState(false);
                          console.log("la pagina se cierra");
                        } else {
                          setCuentaState(true);
                          console.log("la pagina se abre");
                        }
                      }}
                    >
                      cuenta
                    </button>
                  )}
                  {authState && (
                    <div className="text-white font-bold">
                      <Link rel="preload" href="/crud" prefetch={false}>
                        crud
                      </Link>
                    </div>
                  )}
                  {perfilAuth && (
                    <div className="text-white font-bold">
                      <Link rel="preload" href="/perfil" prefetch={false}>
                        perfil
                      </Link>
                    </div>
                  )}

                  <div
                    className={`text-white font-bold ${
                      inicioState && "pointer-events-none cursor-auto"
                    }`}
                  >
                    <Link
                      onClick={() => {
                        setCuentaState(false);
                      }}
                      rel="preload"
                      href="/carrito"
                      prefetch={false}
                    >
                      <svg
                        fill="#ffffff"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50px"
                        height="60px"
                        viewBox="0 0 902.86 902.86"
                      >
                        <g>
                          <g>
                            <path
                              d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                            />
                            <path
                              d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"
                            />
                          </g>
                        </g>
                      </svg>
                    </Link>
                  </div>

                  {/* {authState && <button className="text-white font-bold" onClick={() => route.push('/crud')}>crud</button>
            } */}
                </div>
              </div>
            </div>
            {children}
          </body>
        </html>
      </Provider>
    </>
  );
}
