"use client";

import { UseContext } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LoginCliente() {
  const {
    setInicioState,
    loginSwitch,
    setLoginSwitch,
    setInicioSwitch,
    registroSwitch,
    setRegistroSwitch,
  }: any = useContext(UseContext);

  const route = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <div
        className={`relative h-full  flex flex-col justify-around items-center transition-right duration-300  ease-in-out  ${
          loginSwitch
            ? "      w-full right-[0%]  opacity-100"
            : `  ${
                registroSwitch
                  ? " w-[0%]  right-[200%] opacity-0"
                  : "     w-[0%]  -right-[200%] opacity-0"
              }`
        }  

        
     
       
  
          `}
      >
        <button
          onClick={() => {
            setInicioState(false); //* cierra la ventana
            setInicioSwitch(false); //* cambia la primera ventana
            setLoginSwitch(false); //*cambia la segunda ventana
          }}
          className={`absolute w-[30px] h-[45px]  top-0 right-[8px] z-30`}
        >
          <div
            className=" flex justify-center items-center    h-full
                  before:content-['']  
                  before:absolute 
                  before:block 
                  before:bg-red-500 
                  before:w-[2px]
                  before:h-[20px]
                  before:rotate-45
                  
                  after:content-['']  
                  after:absolute
                  after:block 
                  after:bg-red-500 
                  after:w-[2px]
                  after:h-[20px]
                  after:-rotate-45
                  "
          ></div>
        </button>

        <button
          onClick={() => {
            // setInicioState(false);
            setTimeout(() => {
              setInicioSwitch(false); //* vuelve a la  ventana anterior

              setLoginSwitch(false); //*cambia la ventana actual
            }, 50);
          }}
          className={`absolute w-[25px] h-[25px]  top-[11px] left-[10px] z-30 `}
        >
          <div
            className=" relative   w-[2px] h-[10px]  bg-red-500   transform -rotate-90 left-[10px]  h-full
                  before:content-['']  
                  before:absolute 
                  before:block 
                  before:left-[-4px]
                  before:top-[-3.5px]
                  before:bg-red-500 
                  before:w-[2px]
                  before:h-[12px]
                  before:rotate-[30deg]
                  
                  after:content-['']  
                  after:absolute
                  after:block 
                  after:right-[-4px]
                  after:top-[-3.5px]
                  after:bg-red-500 
                  after:w-[2px]
                  after:h-[12px]
                  after:-rotate-[30deg]
                  "
          ></div>
        </button>

        <div className="flex flex-col justify-center w-[400px] gap-5 ">
          <div className="flex justify-center pt-3 max-sm:text-lg">
            Iniciar Sesión
          </div>

          <div className="flex justify-center max-sm:text-sm">
            <button className="w-[80%] border-red-700 border-2 h-[40px] text-red-700 font-bold rounded-full">
              Correo
            </button>
          </div>

          <div className="flex justify-center max-sm:text-sm">
            <button
              onClick={() => {
                // route.push("/logincliente");
                // setTimeout(() => {
                //   setInicioState(false);
                // }, 3000);
              }}
              className="w-[80%] border-black border-2 h-[40px]  font-bold rounded-full"
            >
              Contraseña
            </button>
          </div>
        </div>

        <div className="w-[400px] flex justify-end gap-x-3 pr-5 max-sm:pr-10">
          <h1 className="max-sm:text-sm">No tienes una cuenta ?</h1>
          <button
            onClick={() => {
              console.log(" presionado el boton enviar");

              //*si se cambia  el localCarrito

              // setInicioState(false); //* cierra la ventana
              // setInicioSwitch(false); //* cambia la primera ventana
              // setLoginSwitch(false); //*cambia la segunda ventana
              // route.push("/registrocliente");

              setLoginSwitch(false); //*cambia la ventana actual
              setRegistroSwitch(true); //* va a la siguiente ventana
            }}
            className="cursor-pointer max-sm:text-sm"
          >
            <h1 className="text-red-700 font-bold">Registrate</h1>
          </button>
        </div>

        {/* <div className="w-[400px] h-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi
          nam accusantium officia vero odio architecto eligendi est? Neque ea
          eaque dolore perferendis tempora nobis facere enim ad laudantium quas.
          Amet totam asperiores voluptatem iusto facere, sunt minus, ad laborum
          reprehenderit temporibus omnis aperiam consectetur modi aspernatur
          sint ullam ab quisquam et? Nihil culpa distinctio quidem sequi ut sit
          esse.
        </div> */}
      </div>
    </>
  );
}
