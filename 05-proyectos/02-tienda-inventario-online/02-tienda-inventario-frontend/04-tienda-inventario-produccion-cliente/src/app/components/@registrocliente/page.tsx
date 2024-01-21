"use client";

import { UseContext } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useEffect, useState } from "react";
import menuApp from "../hooks/menu-App";

export default function RegistroCliente() {
  const {
    inicioSwitch,
    setInicioState,
    registroSwitch,
    setRegistroSwitch,
    loginSwitch,
    setLoginSwitch,
    setInicioSwitch,
  }: any = useContext(UseContext);

  const [correoValue, setCorreoValue] = useState("");

  const { server } = menuApp();

  const route = useRouter();

  const handleRegistroCLiente = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("a presionado el boton", correoValue);

    //*enviar codigo de verificación al correo del cliente

    const payloadRegistroCliente = {
      emailcliente: correoValue,
    };

    const reqRegistroClientePost = await fetch(`${server}/emailcliente/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(payloadRegistroCliente),
      credentials: "include",
    });

    const reqRegistroClienteOut = await reqRegistroClientePost.json();

    console.log("res->registroCliente:", reqRegistroClienteOut);

    //*luego de hacer el registro del cliente
    setCorreoValue("");
  };

  return (
    <>
      <div
        className={`relative h-full  flex flex-col justify-start items-center  transition-right duration-300  ease-in-out  ${
          registroSwitch
            ? "   w-full right-[0%] opacity-100  "
            : " w-[0%]   -right-[300%] opacity-0  "
        } `}
      >
        <button
          onClick={() => {
            setInicioState(false); //*cierra la ventana
            setInicioSwitch(false); //*cambia la primera ventana
            setRegistroSwitch(false); //* cambia la segunda ventana
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
              setCorreoValue("");
              setInicioSwitch(false); //* vuelve a la ventana principal
              // setLoginSwitch(true); //* vuelve a la ventana logincliente

              setRegistroSwitch(false); //*oculta la ventana registrocliente
            }, 50);
          }}
          className={`absolute w-[25px] h-[25px]  top-[11px] left-[10px] z-30`}
        >
          <div
            className=" relative flex justify-center items-center  w-[2px] h-[10px]  bg-red-500  transform -rotate-90 left-[10px]  h-full
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

        <form
          onSubmit={(e) => {
            handleRegistroCLiente(e);
          }}
        >
          <div className="flex flex-col justify-center w-[400px]  mt-8 gap-7 ">
            <div className="flex justify-center pt-3 text-lg max-sm:text-sm ">
              Ingresa tu correo
            </div>
            <div className="relative  flex justify-center  text-lg max-sm:text-lg">
              <fieldset className=" w-[80%] border-gray-500 border-2 max-sm:w-[80%] ">
                <legend className="w-[90px] relative ml-[15px] pl-[5px] text-lg max-sm:text-sm">
                  Correo
                </legend>
                <div className="w-full  pl-[5px] pb-[5px] ">
                  <input
                    className="w-full focus:outline-none text-lg  max-sm:text-sm "
                    type="email"
                    onChange={(e) => {
                      setCorreoValue(e.target.value);
                    }}
                    value={correoValue}
                    name="txtCorreoRegistro"
                    id="txtCorreoRegistro"
                    placeholder="email@mail.com"
                    autoComplete="off"
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="flex justify-center text-lg max-sm:text-sm">
              <input
                type="submit"
                className="w-[80%] border-red-700 border-2 h-[40px] text-red-700 font-bold rounded-full cursor-pointer"
                value="Continue"
              />
            </div>
          </div>
        </form>

        {/* <div className="w-[400px] flex justify-end gap-x-3 pr-5 max-sm:pr-10">
          <h1 className="max-sm:text-sm">No tienes una cuenta ?</h1>
          <button
            onClick={async () => {
              console.log(" presionado el boton enviar");

              //*si se cambia  el localCarrito

              // route.push("/registrocliente");

              // setRegistroSwitch(false);

              // setTimeout(() => {
              //   setInicioSwitch(false);
              // }, 1000);
            }}
            className="cursor-pointer max-sm:text-sm"
          >
            <h1 className="text-blue-700 font-bold">Registrate</h1>
          </button>
        </div> */}

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
