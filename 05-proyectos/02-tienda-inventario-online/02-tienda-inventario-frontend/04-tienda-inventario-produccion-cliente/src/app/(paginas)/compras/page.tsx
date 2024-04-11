"use client";
import MenuCuenta from "@/app/components/menu-cuenta";
import { useRouter } from "next/navigation";
import { Key, useContext, useEffect, useState } from "react";
import comprasApp from "./hooks/compras-App";
import { UseContext } from "@/app/contexts/authContext";
import React from "react";
import Image from "next/image";

export default function Page() {
  const [comprasState, setComprasState] = useState(false);
  const [clientComprasVerifyState, setClientComprasVerifyState] =
    useState(false);

  const [valuekeyResize, setValuekeyResize]: any = useState();

  const [msgComprasValue, setMsgComprasValue] = useState("");
  const {
    cuentaState,
    setCuentaState,
    inicioState,
    setInicioState,
    inicioSwitch,
    setInicioSwitch,
    registroSwitch,
    setRegistroSwitch,
    loginSwitch,
    setLoginSwitch,
    correoSwitch,
    setCorreoSwitch,
    setCorreoValidationSwitch,
  }: any = useContext(UseContext);

  const { server } = comprasApp();
  const route = useRouter();
  useEffect(() => {
    (async () => {
      console.log("yo llegue primero v2");

      //*validar si el usuario esta registrado
      //* si no a inicioado sesion
      console.log("en construcción v2");

      const payloadCarritoValidatePost = {
        emailcliente: sessionStorage.getItem("correoLoginCliente"),
        sessioncliente: sessionStorage.getItem("sessionCorreoLoginCliente"),
      };

      const reqSessionValidateCarritoPost = await fetch(
        `${server}/emailcliente/logincorreo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadCarritoValidatePost),
        }
      );

      const resSessionValidateCarritoPost =
        await reqSessionValidateCarritoPost.json();

      console.log("resSessionValidatePost -> ", resSessionValidateCarritoPost);

      if (
        resSessionValidateCarritoPost.msg ===
        "la sesion no coincide - vuelve a ingresar"
      ) {
        //*creamos un estado
        // setCarritoState(false);
        // setClientCarritoVerifyState(true);

        setCuentaState(false);

        setComprasState(false);
        setClientComprasVerifyState(true);
        setMsgComprasValue("session compras invalida - vuelva a ingresar");

        // setTimeout(() => {
        //   setInicioState(true);
        //   setInicioSwitch(false); //*muestra el menu inicio
        //   setLoginSwitch(false); //*oculta el login del contexto
        // }, 2500);

        sessionStorage.removeItem("correoLoginCliente");
        sessionStorage.removeItem("sessionCorreoLoginCliente");

        setTimeout(() => {
          setInicioState(true);
          setInicioSwitch(false); //*muestra el menu inicio
          setLoginSwitch(false); //*oculta el login del contexto
          // route.push("/");
        }, 2500);
        return true;
      }

      if (
        resSessionValidateCarritoPost.msg ===
        "el usuario no esta registrado - logincliente"
      ) {
        setComprasState(false);
        setClientComprasVerifyState(true);
        setMsgComprasValue("Error al validar usuario , vuelva a ingresar");

        setTimeout(() => {
          sessionStorage.removeItem("correoLoginCliente");
          sessionStorage.removeItem("sessionCorreoLoginCliente");
          route.push("/");
        }, 2500);

        // setCuentaState(false);
        // setInicioState(true); ///*muestra la ventana menu

        // setInicioSwitch(false); //*muestra el menu inicio
        // // setRegistroSwitch(false); //*vuelve al registro
        return true;
      }

      //*previamente se ha validado que el correo y la sesión sean correctos
      //*mostrar el listado de todas las compras

      const payloadEmailClienteCompraPost = {
        emailcliente: sessionStorage.getItem("correoLoginCliente"),
        sessioncliente: sessionStorage.getItem("sessionCorreoLoginCliente"),
      };

      const reqEmailListCompra = await fetch(
        `${server}/emailcliente/listcompras`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadEmailClienteCompraPost),
        }
      );

      const resEmailListCompra = await reqEmailListCompra.json();

      //  const resultDataEmailClienteItems= resEmailListCompra.compra.map((id: { listacompra: any; }) => {if(id.listacompra.length> 0){
      // id.listacompra.map((item: { carritocompra: any; }) => { if(item.carritocompra){item.carritocompra.total}})
      // ;
      //  }
      const resultDataEmailClienteItems = resEmailListCompra.compra.filter(
        (item: { listacompra: any }) =>
          item.listacompra.length > 0 && item.listacompra
      );

      console.log(
        "numero de valores de la lista compra",
        resultDataEmailClienteItems
      );

      setValuekeyResize(resultDataEmailClienteItems);

      //*muestra el elemento unitario
      //  const resEmailfilterSucess = resultDataEmailClienteItems.map((item: { listacompra: any; }) => item.listacompra.map((item: { carritocompra: any; }) => item.carritocompra ))[0][0].id

      //  console.log('resEmailCompra - listcompra ->',resEmailfilterSucess);

      setComprasState(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full min-h-[calc(100vh-64px)] ">
        <MenuCuenta />

        {comprasState && (
          <div>
            <h1>bienvenido a la ventana compras</h1>

            {valuekeyResize.map((item: any, key: any) => (
              <div
                className="w-full h-full  max-sm:w-full "
                key={key}
              >
                <ul className="w-full">
                  <div className="fflex w-full">
                    <li className="bg-yellow-400 text-black w-full">
                      {item.createAt.split("T")[0].replace(/-+/g, "/")} Hora
                      sesion : {item.createAt.split("T")[1].slice(0, 8)}
                    </li>
                  </div>

                  {item.listacompra.map(
                    (
                      item2: {
                        id: any;
                        carritocompra: {
                          pedidos: any;
                          id: any;
                          createAt: any;
                          sessioncarrito: any;
                          total: any;
                        };
                      },
                      key2: Key | any
                    ) => (
                      <React.Fragment key={key2}>
                        <div className="flex   max-sm:w-full" key={key2}>
                          <li className="w-[45px] content-center  text-center bg-blue-700 text-white  border-blue-500 border-2  max-sm:px-0 ">
                            {item2.id}
                          </li>

                          <div className="flex max-sm:flex-col border-black border-2 w-full max-sm:w-full">
                            <div className="flex flex-col items-center justify-center h-full gap-y-2 max-sm:w-full bg-red-700 text-white  border-red-500 border-2">
                              <li
                                className="w-[100%] flex justify-center text-center"
                                key={key2}
                              >
                                {item2.carritocompra &&
                                  item2.carritocompra.createAt
                                    .split("T")[0]
                                    .replace(/-+/g, "/")}{" "}
                                {item2.carritocompra &&
                                  item2.carritocompra.createAt
                                    .split("T")[1]
                                    .slice(0, 8)}
                              </li>

                              <li className="w-full flex justify-center    ">
                                Total:{" "}
                                {item2.carritocompra &&
                                  item2.carritocompra.total}
                              </li>
                            </div>
                            <div className="w-full flex flex-col max-sm:w-full ">
                              {item2.carritocompra &&
                                item2.carritocompra.pedidos.map(
                                  (
                                    item3: {
                                      id: any;
                                      cantidad: any;
                                      subtotal: any;
                                      smartphone: any;
                                      updateAt: any;
                                    },
                                    key3: any
                                  ) => (
                                    <React.Fragment key={key3}>
                                      <div className="grid grid-cols-[1fr,4fr]  border-green-500 border-2  ">
                                        <div className="flex flex-col justify-center text-center">
                                          <li>
                                            {" "}
                                            {item3.updateAt
                                              .split("T")[0]
                                              .replace(/-+/g, "/")}{" "}
                                          </li>
                                          <li>
                                            {item3.updateAt
                                              .split("T")[1]
                                              .slice(0, 8)}
                                          </li>
                                        </div>

                                        <div className="grid grid-cols-4 max-sm:grid max-sm:grid-cols-2 ">
                                        <div className=" flex justify-center items-center ">
                                          {item3.smartphone.picture.includes(
                                            ".webp"
                                          ) ||
                                          item3.smartphone.picture.includes(
                                            ".jpeg"
                                          ) ||
                                          item3.smartphone.picture.includes(
                                            ".png"
                                          ) ||
                                          item3.smartphone.picture.includes(
                                            ".jpg"
                                          ) ||
                                          item3.smartphone.picture.includes(
                                            ".svg"
                                          ) ? (
                                            <Image
                                              width="0"
                                              height="0"
                                              sizes="100vw"
                                              className="w-[100%]  max-w-[550px] h-[100%] max-h-[85%] max-sm:w-[80%] max-sm:max-w-[350px] max-sm:h-[85%]"
                                              src={item3.smartphone.picture}
                                              alt="Picture of the author"
                                            />
                                          ) : (
                                            ""
                                          )}
                                          {item3.smartphone.picture.includes(
                                            ".mp4"
                                          ) ||
                                          item3.smartphone.picture.includes(
                                            ".mp3"
                                          ) ? (
                                            <div className=" content-center w-[100%] h-[220px] max-sm:h-[140px]  max-sm:w-[80%]">
                                              <video
                                                className="w-full h-[70%] object-cover"
                                                width={0}
                                                height={0}
                                                src={item3.smartphone.picture}
                                                controls
                                              >
                                                {item3.smartphone.title}
                                              </video>
                                            </div>
                                          ) : (
                                            ""
                                          )}  
                                        </div>
                                        <div className="content-center text-center">
                                          <li>{item3.smartphone.title}</li>
                                        </div>
                                        <div className="content-center text-center">
                                          <li>Cantidad: {item3.cantidad}</li>
                                        </div>
                                        <div className="content-center text-center">
                                          <li>Subtotal: {item3.subtotal}</li>
                                        </div>
                                        </div>
                                      
                                      </div>
                                    </React.Fragment>
                                  )
                                )}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
        {clientComprasVerifyState && (
          <div className="w-full min-h-[calc(100vh-64px)]  flex flex-col items-center justify-center">
            <div className="w-full  flex justify-center items-center text-2xl max-sm:w-full text-center ">
              {" "}
              {msgComprasValue}
            </div>
            <div className="w-full flex justify-center  h-[40px]  my-3 ">
              <button
                className="flex justify-center items-center w-[12%] max-w-[100px]  text-white bg-red-500 cursor-pointer max-sm:w-[30%] max-sm:max-w-[100px]"
                onClick={() => route.back()}
              >
                volver
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
