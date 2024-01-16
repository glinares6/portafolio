import { useContext, useEffect, useState } from "react";
import { UseContext } from "../contexts/authContext";
import { useRouter } from "next/navigation";
import RegistroCliente from "./@registrocliente/page";

export default function MenuCuenta() {
  const { cuentaState, setCuentaState, inicioState, setInicioState }: any =
    useContext(UseContext);

  const [inicioSwitch, setInicioSwitch] = useState(false);

  const [registroSwitch, setRegistroSwitch] = useState(false);

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
        <div className="fixed z-30 backdrop-brightness-50 bg-white/30 w-full h-[calc(100vh-64px)]  border-red-500 border-2">
          <div className=" w-[100%] h-[100vh] flex justify-center items-start   border-red-500 border-2 ">
            <div
              className={`relative flex   w-[400px] h-[50vh]  border-red-500 border-2 bg-white overflow-hidden  max-sm:w-full max-sm:h-full `}
            >
              <button
                onClick={() => {
                  setInicioState(false);
                  setInicioSwitch(false);
                  setRegistroSwitch(false);
                }}
                className={`absolute w-[30px] h-[45px]  top-0 right-[8px] z-30`}
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

              <div
                className={`relative h-full  flex flex-col justify-around  transition-right duration-500  ease-in-out ${
                  inicioSwitch
                    ? "w-[0%]   right-[100%] opacity-0 "
                    : "w-full   right-0 opacity-100  "
                } `}
              >
                <div className="flex flex-col justify-center w-full gap-5 ">
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
                        }, 3000);
                      }}
                      className="w-[80%] border-black border-2 h-[40px]  font-bold rounded-full"
                    >
                      Ingresar con correo y contraseña
                    </button>
                  </div>

                  <div className="flex justify-center max-sm:text-sm">
                    <button
                      onClick={() => {
                        console.log("enviar valor por google");
                      }}
                      className="w-[80%] border-black border-2 h-[40px]  font-bold rounded-full"
                    >
                      Goggle
                    </button>
                  </div>

                  <div className="flex justify-center max-sm:text-sm">
                    <button
                      onClick={() => {
                        console.log("enviar valor por facebook");
                      }}
                      className="w-[80%] border-black border-2 h-[40px]  font-bold rounded-full"
                    >
                      Facebook
                    </button>
                  </div>
                </div>

                <div className="flex justify-center max-sm:text-sm">
                  {<RegistroCliente />}
                </div>
                <div className="w-full flex justify-end gap-x-3 pr-5">
                  <h1 className="max-sm:text-sm">No tienes una cuenta ?</h1>
                  <button
                    onClick={async () => {
                      console.log(" presionado el boton enviar");

                      //*si se cambia  el localCarrito

                      // route.push("/registrocliente");

                      setInicioSwitch(true);

                      setTimeout(() => {
                        setRegistroSwitch(true);
                      }, 1000);
                    }}
                    className="cursor-pointer max-sm:text-sm"
                  >
                    <h1 className="text-red-700 font-bold">Registrate</h1>
                  </button>
                </div>
              </div>

              <div
                className={`flex h-full relative transition-right duration-500  ease-in-out ${
                  registroSwitch
                    ? "delay-2000  opacity-100 right-[0%] visible "
                    : " w-[0%] opacity-0 -right-[50%] invisible "
                }`}
              >
                <h1>datos de donde lo sacas</h1>
              </div>
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
      )}
    </>
  );
}
