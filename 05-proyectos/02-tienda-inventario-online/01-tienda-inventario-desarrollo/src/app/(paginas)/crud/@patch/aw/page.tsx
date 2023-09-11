'use client'
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type DatosType = {
    id: string,
    picture: string;
    title: string;
    from: string;
    offer1: string;
    offer2: string;
    current: string;
};

export default function Page() {
    const [datos, setDatos] = useState<DatosType>(
        {
            id: '',
            picture: '',
            title: '',
            from: '',
            offer1: '',
            offer2: '',
            current: ''

        }
    );
    // const [datos2, setDatos2] = useState(false);
    // const searchSmart = useSearchParams()



    let numId = 11
    // let arrSmart: any = []
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/smartphone/${numId}`);
            const data = await res.json();
            // arrSmart.push(...data)
            setDatos({ ...data[0], id: numId })

            // setDatos2(true)


        }

        fetchData();
        // console.log("que daño te hace", arrSmart);
    }, [numId]);







    // useEffect(() => {


    //     if (searchSmart) {


    //         const idSmart = searchSmart.get('id')

    //         const pictureSmart = searchSmart.get('picture')
    //         const titleSmart = searchSmart.get('title')
    //         const fileSmartphoneSmart = searchSmart.get('fileSmartphone')
    //         const fromSmart = searchSmart.get('from')
    //         const offer1Smart = searchSmart.get('offer1')
    //         const offer2Smart = searchSmart.get('offer2')
    //         const currentSmart = searchSmart.get('current')


    //         if (idSmart) {
    //             const bodySmartPhone = {
    //                 picture: pictureSmart,
    //                 title: titleSmart,
    //                 from: fromSmart,
    //                 offer1: offer1Smart,
    //                 offer2: offer2Smart,
    //                 current: currentSmart

    //             }

    //             fetch(`http://localhost:3000/smartphone/${idSmart}`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(bodySmartPhone)
    //             }).then(response => {
    //                 if (response.ok) {
    //                     console.log('la URL tiene el acceso - PATCH');

    //                 } else {
    //                     console.log('No se puede conectar a la URL - PATCH');

    //                 }
    //             }).catch(error => {
    //                 console.log('fallo la conexion con el servidor -PATCH', error);

    //             }

    //             )

    //         }
    //     }


    // }, [searchSmart])





    // console.log("datos ahora ", datos[0].picture);




    // useEffect(() => {
    //     console.log("datos del primero", datos);

    // }, [datos])


    const handleSmart = (e: { preventDefault: () => void; }) => {

        e.preventDefault()
        if (numId) {


            fetch(`http://localhost:3000/smartphone/${numId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            }).then(response => {
                if (response.ok) {
                    console.log('la URL tiene el acceso - PATCH');

                } else {
                    console.log('No se puede conectar a la URL - PATCH');

                }
            }).catch(error => {
                console.log('fallo la conexion con el servidor -PATCH', error);

            }

            )

        }
    }

    // useEffect(() => {

    //     async function fetchData() {


    //         if (datos2) {
    //             const res = await fetch(`http://localhost:3000/smartphone/${numId}`);
    //             const data = await res.json();
    //             // arrSmart.push(...data)

    //             console.log("datos segundo", datos2);
    //             setDatos2(true)
    //             setDatos({ ...data[0], id: numId })

    //         }

    //     }

    //     fetchData();

    // }, [datos2, numId])









    return (
        <>
            {/* {datos ? datos[0].picture : <h1>no hay nada</h1>} */}
            <div className="flex  justify-center text-2xl">Actualizar los datos de la tabla smartphone </div>
            <form onSubmit={handleSmart}
                className="flex flex-col w-full    items-center gap-2 " >
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="id">Id:</label>
                    <input className="w-[88%] border-gray-500 border-2 border-dashed  h-[40px]" type="text" name="id" id="id" value={datos.id} required autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, id: e.target.value })
                    } />
                </div>
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="picture">Picture:</label>
                    <input className="w-[88%] border-gray-500 border-2   h-[40px]" type="text" name="picture" id="picture" value={datos.picture} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, picture: e.target.value })
                    } />
                </div>
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="title">Title:</label>
                    <input className="w-[88%] border-gray-500 border-2 h-[40px]" type="text" name="title" id="title" value={datos.title} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, title: e.target.value })
                    } />
                </div>
                <div className="flex w-2/4 items-center justify-end">
                    <input className="w-[88%] " type="file" name="fileSmartphone" id="fileSmartphone" />

                </div>
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="from">from:</label>
                    <input className="w-[88%] border-gray-500 border-2 h-[40px]" type="text" name="from" id="from" value={datos.from} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, from: e.target.value })
                    } />
                </div>

                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="offer1">Offer1:</label>
                    <input className="w-[88%] border-gray-500 border-2 h-[40px]" type="text" name="offer1" id="offer1" value={datos.offer1} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, offer1: e.target.value })
                    } />
                </div>
                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="offer2">Offer2:</label>
                    <input className="w-[88%] border-gray-500 border-2 h-[40px]" type="text" name="offer2" id="offer2" value={datos.offer2} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, offer2: e.target.value })
                    } />
                </div>

                <div className="flex w-2/4 items-center justify-between">
                    <label htmlFor="current">Current:</label>
                    <input className="w-[88%] border-gray-500 border-2 h-[40px]" type="text" name="current" id="current" value={datos.current} autoComplete="off" onChange={(e) =>
                        setDatos({ ...datos, current: e.target.value })
                    } />
                </div>

                <div className="flex w-full my-2  justify-center   cursor-pointer h-[40px]">
                    <input type="submit" className=" w-1/12 text-white bg-red-500 cursor-pointer" value="Enviar" />
                </div>
            </form>
            {/* <button onClick={handleClick}> dar</button> */}
        </>
    )
}