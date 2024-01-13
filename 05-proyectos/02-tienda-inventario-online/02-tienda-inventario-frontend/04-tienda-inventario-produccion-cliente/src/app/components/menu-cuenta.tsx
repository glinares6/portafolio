import { useContext, useEffect, useState } from "react";
import { UseContext } from "../contexts/authContext";
import { useRouter } from "next/navigation";

export default function MenuCuenta() {
  const { cuentaState, setCuentaState, inicioState, setInicioState }: any =
    useContext(UseContext);
  const route = useRouter();

  useEffect(() => {
    setCuentaState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {cuentaState && (
        <div className=" fixed z-30  pr-[70px] flex flex-col items-end top-[64px] right-0 w-full  h-full  min-h-[100vh] backdrop-brightness-50 bg-white/2  border-blue-500 border-2  ">
          <div className="flex flex-col items-center bg-white w-[200px] h-[300px] border-red-500 gap-2 border-2    ">
            <button
              className="flex justify-start pl-1 w-full  mt-2
                "
              onClick={() => {
                // route.push("/logincliente");
                setCuentaState(false);

                setInicioState(true);
              }}
            >
              Iniciar Sesión
            </button>
            <button className="flex justify-start pl-1 w-full ">Perfil</button>
            <button className="flex justify-start pl-1 w-full ">Compras</button>
          </div>
        </div>
      )}

      {inicioState && (
        <div className="fixed z-30 backdrop-brightness-50 bg-white/30 w-full h-[100vh] ">
          <div className=" w-[100%] h-[calc(100vh-64px)]  flex justify-center items-start   ">
            <div className="relative flex flex-col w-[400px] h-[50vh] max-sm:w-full max-sm:h-full bg-white border-red-500 border-2 gap-5">
              <button
                onClick={() => {
                  setInicioState(false);
                }}
                className={`absolute w-[30px] h-[45px]  top-0 right-[8px] `}
              >
                <div
                  className=" flex justify-center items-center  w-full h-full
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

              <div className="flex justify-center pt-3 max-sm:text-lg">
                Iniciar Sesión
              </div>
              <div className="flex justify-center max-sm:text-sm">
                <button className="w-[80%] border-red-700 border-2 h-[40px] text-red-700 font-bold rounded-full">
                  Recibir la clave de acceso por correo
                </button>
              </div>
              <div className="flex justify-center max-sm:text-sm">
                <button
                  onClick={() => {
                    route.push("/logincliente");

                    setTimeout(() => {
                      setInicioState(false);
                    }, 1000);
                  }}
                  className="w-[80%] border-black border-2 h-[40px]  font-bold rounded-full"
                >
                  Ingresar con correo y contraseña
                </button>
              </div>
              {/* <div>
                <button
                  onClick={() => {
                    setInicioState(false);
                  }}
                  className={`w-[70px] h-[45px] bg-red-500 text-white `}
                >
                  <div className="relative flex justify-center items-center">
                    <div className="pl-[2.5px] absolute   rotate-[45deg] ">
                      |
                    </div>
                    <div className="pr-[2.5px] absolute   -rotate-[45deg] ">
                      |
                    </div>
                  </div>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
