import { useContext, useEffect } from "react";
import { UseContext } from "../contexts/authContext";
import { useRouter } from "next/navigation";

export default function MenuCuenta() {
  const { cuentaState, setCuentaState }: any = useContext(UseContext);
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
                route.push("/logincliente");
                setCuentaState(false);
              }}
            >
              Iniciar Sesión
            </button>
            <button className="flex justify-start pl-1 w-full ">Perfil</button>
            <button className="flex justify-start pl-1 w-full ">Compras</button>
          </div>
        </div>
      )}
    </>
  );
}
