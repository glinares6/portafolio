'use client'

import { UseContext } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import userApp from "./hooks/user-App";

export default function Page() {

    const [inpUser, setInpUser]: any = useState('')
    const [inpPass, setInpPass]: any = useState('')

    const { userGetAuth } = userApp();
    const [httpResError, setHttpResError] = useState(false)
    const [isUser, serIsUser] = useState(false)

    const { authState, setAuthState, setPerfilAuth, setUserAuth }: any = useContext(UseContext)

    const route = useRouter()

    let resUserGet;

    const handleSubmitForm = async (e: {
        [x: string]: any; preventDefault: () => void
    }) => {
        e.preventDefault()
        // console.log('boton enviar user', inpUser);
        // console.log('boton enviar password', inpPass);

        const usersRes = await userGetAuth()

        resUserGet = usersRes.find((items: any) => (
            // console.log(`valor ${i} usuario ${items.username} y  ${items.userpass}`);
            items.username == inpUser && items.userpass == inpPass
        ))

        console.log(" datos back", resUserGet);


        if (!resUserGet) {
            // console.log('los datos no coinciden');
            setHttpResError(true)

        } else {
            // console.log('dato conincidente•••');
            setHttpResError(false)
            serIsUser(true)
            setUserAuth({
                id: resUserGet.id,
                username: resUserGet.username,
                userpass: resUserGet.userpass
            })

        }

        console.log(authState);


        if (authState) {
            if (resUserGet) {
                route.push('/crud/at')
                setPerfilAuth(true)
            }
        }


        // setAuthState(true)



    }

    const handleRegister = () => {
        route.push('/registro')
    }

    return (
        <>

            <div className="border-red-500 border-2
            flex   w-full  h-[calc(100vh-64px)]  justify-center items-center">


                <form onSubmit={handleSubmitForm} className="flex flex-col border-green-500 border-2  w-[25%] h-[60%] min-w-[250px] min-h-[250px]   max-sm:w-[70%] max-sm:min-w-[200px]"  >
                    <div className="flex justify-center  items-center w-full h-[15%] border-red-500 border-2">
                        <div className="flex items-center  justify-center w-full h-[50%]  border-green-500 border-2">
                            <h1 className=" text-center">Iniciar Sesión</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full h-[65%] border-red-500 border-2">
                        <div className="flex flex-col w-full h-[25%] min-h-[60px]  border-green-500 border-2">
                            <label id="textNombre" className="flex justify-start items-center h-full border-blue-500 border-2 text-center">Usuario:</label>
                            <input className="h-full" type="text" name="TextNombre" id="textNombre" placeholder="user@mail.com" value={inpUser} onChange={(e) => {
                                setInpUser(e.target.value)
                                setHttpResError(false)
                            }} required autoComplete="off" />
                        </div>
                        <div className="flex flex-col   h-[25%] min-h-[60px]   border-green-500 border-2">
                            <label id="textPassword" className="flex justify-start items-center h-full border-blue-500 border-2 text-center">Contraseña:</label>
                            <input className="h-full" type="password" name="textPassword" id="textPassword" value={inpPass} onChange={(e) => {
                                setInpPass(e.target.value)
                                setHttpResError(false)
                            }} required autoComplete="off" />
                        </div>
                        {httpResError &&
                            <div className="bg-red-600 text-white flex flex-col justify-center items-center   h-[10%] min-h-[45px]   border-green-500 border-2">
                                <p>Usuario y/o contraseña incorrecta</p>
                            </div>
                        }


                        {isUser &&
                            <div className="bg-blue-600 text-white flex flex-col justify-center items-center   h-[10%] min-h-[45px]   border-green-500 border-2">
                                <p>Usuario/contraseña coincidente</p>
                            </div>
                        }
                    </div>
                    <div className="flex justify-center items-center gap-4 w-full h-[20%] border-red-500 border-2">
                        <div className="flex items-center  justify-center w-[40%] h-[40%] min-h-[30px] max-sm:h-[50%] border-blue-500 border-2 ">
                            <input className="border-green-500 border-2 cursor-pointer w-full h-full" type="submit" value="Ingresar" onClick={(e: any) => {
                                // console.log("e interno", e.target.form[0].value);
                                // console.log("e interno", e.target.form[1].value);

                                if (e.target.form[0].value && e.target.form[1].value) {
                                    setAuthState(true)
                                    // route.push('/crud/at')
                                }
                            }
                            } />
                        </div>
                        <div className="flex items-center justify-center w-[40%] h-[40%] min-h-[30px]  max-sm:h-[50%] border-blue-500 border-2 ">
                            <input className="border-green-500 border-2 cursor-pointer w-full h-full" type="submit" value="Salir" onClick={() => {

                                setAuthState(false)
                                route.push('/')
                            }
                            } />
                        </div>
                    </div>
                    <div className="flex justify-end pr-1">
                        <h1 className="text-md max-sm:text-sm">¿Tienes una cuenta? <button onClick={handleRegister}><span className="text-red-500">Registrate</span></button></h1>
                    </div>
                </form>
            </div>
        </>
    )
}